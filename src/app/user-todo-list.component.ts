import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { User } from './user';
import { UserService } from './user.service';

export class TodoItem{
  purchase: string;
  done: boolean;

  constructor(purchase: string) {
    this.purchase = purchase;
    this.done = false;
  }
}

@Component({
  selector: 'user-todo-list',
  templateUrl: './user-todo-list.component.html',
  styleUrls: [ './user-todo-list.component.css' ]
})
export class UserTodoListComponent implements OnInit{
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }

  addTask(task: string): void {
    if (!task) { return; }
    this.user.todoList.push(new TodoItem(task));
  }

  deleteTask(task: string): void {
    this.user.todoList.forEach((item:string,i:number) => {if(task === item) this.user.todoList.splice(i,1)})
  }

  goBack(): void {
    this.location.back();
  }

}
