import { Component } from '@angular/core';
import { User } from '../dataType';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  constructor(private userService: UserService, private router:Router) { }

  signUp(data:User):void{
    console.log(data);

    if(data.username != "" && data.email != "" && data.password != ""){
      this.userService.registerUser(data).subscribe((result) => {
        if(result){
          alert("User registered.")
          this.router.navigate(['userLogin']);
        }
      })
    }

  }
}
