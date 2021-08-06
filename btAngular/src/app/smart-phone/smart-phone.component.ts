import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Smartphone } from '../model/smartPhone';

@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.scss']
})
export class SmartPhoneComponent implements OnInit {
  @Input() smartphone: Smartphone;
  gioHang: Smartphone[];
  @Output() gioHangEmitter = new EventEmitter();
  constructor() { }

  onCartSmartphone(smartphone) {
    let cartSmartPhone = smartphone
    this.gioHang.push(smartphone);
    this.gioHangEmitter.emit(this.gioHang);
    console.log(this.gioHang);

  }



  ngOnInit(): void {
  }

}
