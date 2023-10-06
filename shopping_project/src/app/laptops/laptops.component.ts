import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  constructor(private productService : ProductService){}

  laptops:any = {}

  ngOnInit(): void {
      this.productService.getProducts(2).subscribe((data) => {
        this.laptops = data;
        console.log(this.laptops);
      })
  }
}
