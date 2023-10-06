import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router';
import { Category, SignUp } from '../dataType';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent{
  constructor(private seller : SellerService, private router:Router){}

  signUp(data:any):void{
    console.log(data); // for testing 
    this.seller.userSignup(data).subscribe((result) => {
      // console.log(result);
      if(result){
        this.router.navigate(['sellerLogin']);
      }
    })
  }
  
}
