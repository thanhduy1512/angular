import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from "../services/category.service";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  //dependency injection
  constructor(public categorySv: CategoryService) { }

  categoryList: Category[];
  selectedCategory: string;

  onSelectCategory(type: string) {
    this.categorySv.setSelectedCategory(type);

  }

  //lifecycle chạy lúc đầu
  ngOnInit(): void {
    this.categoryList = this.categorySv.categoryList;

    // this.selectedCategory = this.categorySv.selectedCategory;
    // this.categorySv.selectedCategoryEmitter.subscribe((val) => {
    //   this.selectedCategory = val;
    // });
    this.categorySv.selectedCategory.subscribe((val) => {
      this.selectedCategory = val;
    })
  }
}
