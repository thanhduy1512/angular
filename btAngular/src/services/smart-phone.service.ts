import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartPhoneService {
  smartPhoneList = [
    {
      id: 1,
      type: "oppo",
      name: 'Oppo R1',
      image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
      description: 'Sản phẩm của china',
      quantity: 1,
      price: 450,
      invetory: 10,
      rating: 3
    },
    {
      id: 2,
      type: "samsung",
      name: 'Samsung Galaxy Note 9',
      image: '../assets/images.jpeg',
      description: 'Sản phẩm của Hàn Quốc',
      quantity: 1,
      price: 200,
      invetory: 15,
      rating: 5
    }, {
      id: 3,
      type: "iphone",
      name: 'Iphone XS',
      image: '../assets/tải xuống.jpeg',
      description: 'Sản phẩm của US',
      quantity: 1,
      price: 600,
      invetory: 20,
      rating: 4
    }
  ]
  constructor() { }
}
