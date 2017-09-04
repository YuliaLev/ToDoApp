import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]

})
export class UsersComponent implements OnInit {
  users: User[];
  // selectedUser:User;

  // onSelect(user: User): void {
  //   this.selectedUser = user;
  // }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  gotoTodoList(id: string): void {
    this.router.navigate(['/todolist', id]);
  }
}

