import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { StaticModule } from 'src/app/static/static.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProfileComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    StaticModule,
    MaterialModule
  ]
})
export class UserModule { }
