import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management/management.component';
import { SharedModule } from '../shared/shared.module';
import { JsonEditorDirective } from './json-editor.directive';
import { NgJsonEditorModule } from 'ang-jsoneditor';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgJsonEditorModule
  ],
  declarations: [
    ManagementComponent,
    JsonEditorDirective
  ]
})
export class ManagerModule { }
