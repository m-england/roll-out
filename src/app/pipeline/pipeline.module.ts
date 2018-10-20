import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { TaskComponent } from './task/task.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    SummaryComponent,
    TaskComponent,
    UserInfoComponent,
    TaskListComponent
  ]
})
export class PipelineModule { }
