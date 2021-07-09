import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  loading = false;

  constructor(private router: Router) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]) 
  hide = true;
  
  ngOnInit(): void {
  }
  //tiempo en que en loading aparece
  fakeLoading(){
    this.loading = true;
    
    setTimeout(() => {
      //Redireccionamos al home
      this.loading = false;
      this.router.navigate(['/product']);
    },1500);
  }
  // mensage de alerta del input email
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //mensaje de validacion del usuario
  credentialInvalid(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Credential Incorret',
      showConfirmButton: false,
      timer: 1500
    });
  }

  login(){
    const email = this.email.value;
    const pass = this.password.value;
    
    if(email == 'admin@me.com' && pass == '12345678'){
      this.fakeLoading(); 
    } else {
      this.credentialInvalid()
      this.email.reset()
      this.password.reset()
    }
  }
}
