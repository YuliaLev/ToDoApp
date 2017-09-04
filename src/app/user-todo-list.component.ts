import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { User } from './user';
import { UserService } from './user.service';

export class TodoItem{
  todo_id: number;
  description: string;
  done: boolean;
  date: number;

  constructor(description: string, todo_id: number) {
    this.description = description;
    this.todo_id = todo_id;
    this.done = false;
    this.date = +new Date();
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
    this.user.todoList.push(new TodoItem(task, this.user.todoList[this.user.todoList.length - 1].todo_id + 1));
  }

  deleteTask(todo_id: number): void {
    this.user.todoList.forEach((item:any,i:number) => {if(todo_id === item.todo_id) this.user.todoList.splice(i,1)});
    console.log(+new Date());
  }

  goBack(): void {
    this.location.back();
  }


}
