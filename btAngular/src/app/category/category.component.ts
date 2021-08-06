import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public categorySv: CategoryService) { }

  categoryList: Category[];

  onSelectCategory(type: string) {
    this.categorySv.setSelectedCategory(type);
    console.log(this.categorySv.selectedCategory);

  }
  ngOnInit(): void {
    this.categoryList = this.categorySv.categoryList;
  }

}
