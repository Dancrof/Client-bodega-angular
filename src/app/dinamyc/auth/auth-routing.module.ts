import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'singIn', component: AuthLoginComponent},
      {path: 'singUp', component: AuthRegisterComponent},
      {path: '**', redirectTo: 'singIn'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
