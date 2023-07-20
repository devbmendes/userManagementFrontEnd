import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessRoutingModule } from './acess-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AcessRoutingModule
  ]
})
export class AcessModule { }
