import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  typesOfShoes: object[] = [
    {
      opcion: 'Product',
      ruta: '/product'
    },
    {
      opcion: 'User',
      ruta: '/user'
    }
  ];
  
  mostrar = true;

  constructor() { }

  ngOnInit(): void {
  }

}
