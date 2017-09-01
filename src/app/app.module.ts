import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { UserTodoListComponent } from './user-todo-list.component';
import { UsersComponent } from './users.component';
import { DashboardComponent } from './dashboard.component';
import { UserService } from './user.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'todolist/:id',
        component: UserTodoListComponent
      },
    ])
  ],
  declarations: [
    AppComponent,
    UserTodoListComponent,
    UsersComponent,
    DashboardComponent
  ],
  providers: [UserService],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }
