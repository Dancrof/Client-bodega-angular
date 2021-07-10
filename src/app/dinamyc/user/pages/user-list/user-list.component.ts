import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user = [
    {
      id: '1',
      nombre: 'Peito Gutierrez',
      username: '@pepito',
      email: 'pepito@me.com'
    },
    {
      id: '2',
      nombre: 'Carlos Perez',
      username: '@Carlos',
      email: 'carlos@me.com'
    },
    {
      id: '',
      nombre: 'jordan Caicedo',
      username: '@Jordan',
      email: 'jordan@me.com'
    }
  ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
