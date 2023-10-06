import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Category, Product, Seller } from '../dataType';
import { SellerLoginComponent } from '../seller-login/seller-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  sellerId: number = 0;

  productName: string = "";
  productDescription: string = "";

  sellerName: string = "";
  sellerIdDisp: number = 0;
  categoryName: string = '';

  thumbnailUrl: string = '';
  imageUrl1: string = '';
  imageUrl2: string = '';
  imageUrl3: string = '';

  categoryId: number = 0;
  price: number = 0;
  discount: number = 0;
  stock: number = 0;

  categories: Category[] = [];
  categoryThumbnail:string = '';
  categoryRoute: string = '';

  // sellerData: Seller = {};
  sellerData: any = {};

  constructor(public sellerService: SellerService, private router:Router) { }

  isAllowed = false;
  ngOnInit(): void {
    this.sellerData = this.sellerService.getSeller();

    this.sellerName = this.sellerData.username;
    this.sellerId = this.sellerData.id;
    this.isAllowed = this.sellerService.getValidation();

    this.sellerService.findAllCategories().subscribe((data) => {
      this.categories = data;
      // console.log(this.categories); // for testing
    })
  }

  isCategoryAdded = false;
  categoryAdditionCount = 0;

  createCategory(category: Category): void {
    category = { categoryName: this.categoryName, categoryThumbnail: this.categoryThumbnail, categoryRoute: this.categoryRoute };

    this.sellerService.addCategory(category).subscribe((result) => {
      if (result) {
        this.isCategoryAdded = true;
        this.categoryAdditionCount++;
      } else {
        this.isCategoryAdded = false;
      }
    });
  }

  logout(): void {
    this.sellerService.clearSeller()
    this.router.navigate(['userSignup']);
  }

  isNewProductAdded = false;
  newProductCount = 0;

  submitProduct(product: Product): void {
    product = {
      productName : this.productName,
      productDescription: this.productDescription,
      thumbnailUrl: this.thumbnailUrl,
      imageUrl1: this.imageUrl1,
      imageUrl2: this.imageUrl2,
      imageUrl3: this.imageUrl3,
      sellerId: this.sellerId,
      categoryId: this.categoryId,
      price: this.price,
      discount: this.discount,
      stock: this.stock
    }

    this.sellerService.saveProduct(product).subscribe((result) => {
      if(result){
        this.isNewProductAdded = true;
        this.newProductCount++;
      }
    })
  }


}
