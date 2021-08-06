import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  constructor(private productSv: ProductService, private categorySv: CategoryService) { }
  productList: Product[];
  ngOnInit(): void {
    // this.productList = this.productSv.productList.filter(item => item.type === this.categorySv.selectedCategory);

    this.categorySv.selectedCategory.subscribe((val) => {
      this.productList = this.productSv.productList.filter(item => item.type === val);

    })
  }

  //lifecycle chạy khi mà input đầu vào thay đổi
  ngOnChanges() {
  }


}


/**
 * 1. Tạo service productService, chứa productList
 * 2.inject service vào component ProductListComponent
 * 3. render productItem
 */