import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SummaryComponent } from './summary/summary.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'manage', component: ManagementComponent },
  { path: '',
    redirectTo: '/summary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
