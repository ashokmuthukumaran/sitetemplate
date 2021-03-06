import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../services';
import { NbAuthSocialLink } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  errors: string[];
  showMessages: any;
  socialLinks: NbAuthSocialLink[];
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['page']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        //   username: ['', Validators.required],
        //   password: ['', Validators.required],
          'username': new FormControl(''),
            'password': new FormControl('') 
      });
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'pages/dashboard';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
                  localStorage.setItem('currentUser', JSON.stringify(data));
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
     }

     

}
