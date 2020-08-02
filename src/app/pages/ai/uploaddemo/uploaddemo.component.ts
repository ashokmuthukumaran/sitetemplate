import { Component, OnInit } from '@angular/core';
import { FileUploader ,FileSelectDirective } from 'ng2-file-upload';

import { FileUploadModule } from "ng2-file-upload"
import { Directive } from '@angular/core';


// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'ngx-uploaddemo',
  templateUrl: './uploaddemo.component.html',
  styleUrls: ['./uploaddemo.component.scss']
})

export class UploaddemoComponent implements OnInit {

  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  constructor() { 
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
 
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
     this.response = '';
    this.uploader.response.subscribe( res => this.response = res );
  }

  ngOnInit(): void {
  }
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
