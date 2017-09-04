import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserTodoListComponent } from './user-todo-list.component';
import { UsersComponent } from './users.component';
import {LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'todolist/:id', component: UserTodoListComponent },
  { path: 'users',     component: UsersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
