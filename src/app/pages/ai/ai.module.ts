import {NgModule} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatInputModule } from '@angular/material/input' ;
import { MatProgressBarModule } from '@angular/material/progress-bar' ;
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UploaddemoComponent } from './uploaddemo/uploaddemo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxUploadModule, DropTargetOptions } from '@wkoza/ngx-upload';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { SearchComponent } from './search/search.component';

export const ngxDropTargetOptions: DropTargetOptions = {
  color: 'dropZoneColor',
  colorDrag: 'dropZoneColorDrag',
  colorDrop: 'dropZoneColorDrop'
};

@NgModule({
  declarations: [UploaddemoComponent, SearchComponent],
  imports: [ NbButtonModule,
    NbCardModule,
    MatProgressBarModule,
    NbTabsetModule,
    NbUserModule,
    Ng2SmartTableModule,
    ThemeModule,
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