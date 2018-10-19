import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';
import { UserService } from './user.service';
import { WorkflowEventsService } from './workflow-events.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TaskService,
    UserService,
    WorkflowEventsService
  ],
  declarations: []
})
export class CoreModule { }
