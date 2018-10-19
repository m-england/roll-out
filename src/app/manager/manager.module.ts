import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { ManagementComponent } from './management/management.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    JsonEditorComponent,
    ManagementComponent
  ]
})
export class ManagerModule { }
