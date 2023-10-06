import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private productService: ProductService, private router: Router) { }
  Verified = false;
  data: any = {};

  cartSize: number = 0;

  ngOnInit(): void {
    this.data = this.userService.getUser();
    this.Verified = this.userService.getValidation();
    console.log(this.Verified);

    this.productService.getCartSize(this.data.id).subscribe(
      (size: number) => {
        this.cartSize = size;
        console.log("Cart Size: " + this.cartSize);
      },
      (error: any) => {
        console.error("Error fetching cart size:", error);
      }
    );
  }


  Logout(): void {
    this.userService.clearUser();
    this.router.navigate(['home']);
  }
}
