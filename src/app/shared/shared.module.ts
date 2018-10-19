import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CanViewDirective } from './can-view.directive';
import { CanEditDirective } from './can-edit.directive';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    NavBarComponent,
    CanViewDirective,
    CanEditDirective
  ]
})
export class SharedModule { }
