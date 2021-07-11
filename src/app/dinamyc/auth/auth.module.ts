import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';
import { MaterialModule } from 'src/app/material/material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class AuthModule { }
