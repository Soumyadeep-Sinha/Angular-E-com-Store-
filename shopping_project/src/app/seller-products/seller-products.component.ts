import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css']
})
export class SellerProductsComponent implements OnInit {
  constructor(private productservice : ProductService, private sellerservice:SellerService){}
  products: any[] = [];
  seller:any = {}
  ngOnInit(): void {
    this.seller = this.sellerservice.getSeller();
    this.productservice.getProductsBySellerId(this.seller.id).subscribe((result) => {
      this.products = result;
    })
  }
}
