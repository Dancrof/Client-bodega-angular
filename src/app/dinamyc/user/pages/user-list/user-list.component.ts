import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from 'src/app/api/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: CreateUserDto[];
 
  constructor() { }

  ngOnInit(): void {
  }
}
