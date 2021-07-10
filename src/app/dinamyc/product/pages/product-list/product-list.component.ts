import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product = [
    {
      id: '1',
      nombre: 'pepsi',
      peso: '12 L',
      precio: '$ 1.20',
      cantidad: '1000'
    },
    {
      id: '2',
      nombre: 'Fiora',
      peso: '1L',
      precio: '$ 2.20',
      cantidad: '3000'
    },
    {
      id: '',
      nombre: 'Coca Cola',
      peso: '14L',
      precio: '$ 0.20',
      cantidad: '2000'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
