import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Route, Router } from '@angular/router';
import { Login, Seller } from '../dataType';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})

export class SellerLoginComponent {
  constructor(private seller : SellerService, private router:Router){}

  signUp(data:any):void{
    console.log(data); // for testing 
    this.seller.userLogin(data).subscribe((result) => {
      console.log(result);
      // this.isAuthenticated = result;
      console.log()
      if(result){
        this.router.navigate(['sellerHome']);
        this.seller.setSeller(result);
      }

    })
  }
}
