import {NgModule} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatInputModule } from '@angular/material/input' ;
import { MatProgressBarModule } from '@angular/material/progress-bar' ;

import { UploaddemoComponent } from './uploaddemo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxUploadModule, DropTargetOptions } from '@wkoza/ngx-upload';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ai', pathMatch: 'full' },
  { path: 'material', component: UploaddemoComponent }
];

export const ngxDropTargetOptions: DropTargetOptions = {
  color: 'dropZoneColor',
  colorDrag: 'dropZoneColorDrag',
  colorDrop: 'dropZoneColorDrop'
};

@NgModule({
  declarations: [UploaddemoComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    NgxUploadModule,
    NgxUploadModule.forRoot(ngxDropTargetOptions)
  ],
  exports: [],
})
export class AiModule { }