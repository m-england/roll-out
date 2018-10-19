import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './manager/management/management.component';
import { SummaryComponent } from './pipeline/summary/summary.component';

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
