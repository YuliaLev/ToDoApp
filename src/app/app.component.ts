import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/login">Login</a>
    <a routerLink="/users">Users</a>
   <router-outlet></router-outlet>
`
})

export class AppComponent  {
  title = 'ToDo List App';

}
