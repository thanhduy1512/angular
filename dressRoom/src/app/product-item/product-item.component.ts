import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private productSv: ProductService) { }




  ngOnInit(): void { }

  onSelect() {
    this.productSv.setSelectedProducts(this.product.imgSrc_png, this.product.type);
  }
}
