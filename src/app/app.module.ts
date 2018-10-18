import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { CanAccessDirective } from './can-access.directive';
import { TaskListComponent } from './task-list/task-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SummaryComponent } from './summary/summary.component';
import { ManagementComponent } from './management/management.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CanAccessDirective,
    TaskListComponent,
    UserInfoComponent,
    SummaryComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
