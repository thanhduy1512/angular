import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

type SelectedProducts = {
  topclothes: string,
  botclothes: string,
  shoes: string,
  handbags: string,
  necklaces: string,
  hairstyle: string,
  background: string
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor(private productSv: ProductService) { }


  selectedProducts: SelectedProducts;

  ngOnInit(): void {
    // this.selectedProducts = this.productSv.selectedProducts;
    // this.productSv.selectedProductsEmitter.subscribe((val) => {
    //   this.selectedProducts = val;
    this.productSv.selectedProducts.subscribe((val) => {
      this.selectedProducts = val;
    });

  }

}
