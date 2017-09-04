import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserTodoListComponent } from './user-todo-list.component';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login.component';

import { UserService } from './user.service';

import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UserTodoListComponent,
    UsersComponent,
    LoginComponent
  ],
  providers: [UserService],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }
