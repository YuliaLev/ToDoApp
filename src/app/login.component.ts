import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit{
  model = {
    email: '',
    password: ''
  };

  invalidEmail:boolean = false;
  currentUser: User;
  users: User[];

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

  validateEmail():boolean {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.model.email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  login(): void {
    if(this.model.email && this.model.password && this.validateEmail()){
      console.log('its ok');
      this.users.forEach((item) => {
        if(item.email === this.model.email && item.password === this.model.password) {
          this.currentUser = item;
          this.router.navigate(['/todolist', this.currentUser.id]);
        }
      });
    } else if (!this.validateEmail()){
      this.invalidEmail = true;
    }

    console.log(this.model.email);
    console.log(this.model.password);
    console.log(this.currentUser);
  }
}
