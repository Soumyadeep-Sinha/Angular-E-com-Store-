import { Component, OnInit } from '@angular/core';
import { Category } from '../dataType';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(public sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.findAllCategories().subscribe((data) => {
      this.categories = data;
    })
  }
}
