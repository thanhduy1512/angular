import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryList = [
    { id: 1, showName: "Oppo", type: "oppo" },
    { id: 2, showName: "Samsung", type: "samsung" },
    { id: 3, showName: "Iphone", type: "iphone" },
  ]
  selectedCategory = "oppo";
  @Output() selectedCategoryEmitter = new EventEmitter();
  setSelectedCategory(type: string) {
    this.selectedCategory = type;
    this.selectedCategoryEmitter.emit(this.selectedCategory);

  }
  constructor() { }
}
