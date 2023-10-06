import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  constructor(private productService : ProductService){}

  mobiles:any = {}

  ngOnInit(): void {
      this.productService.getProducts(1).subscribe((data) => {
        this.mobiles = data;
        console.log(this.mobiles);
      })
  }
}
