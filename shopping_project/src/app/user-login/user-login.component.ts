import { Component } from '@angular/core';
import { User, UserLogin } from '../dataType';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private userService: UserService, private router: Router) { }

  loginUser(data: UserLogin): void {
    console.log(data); // for testing 
    this.userService.loginUser(data).subscribe((result) => {
      console.log(result);
      // console.log()
      if (result) {
        this.router.navigate(['home']);
        this.userService.setUser(result)
      }
    })
  }
}
