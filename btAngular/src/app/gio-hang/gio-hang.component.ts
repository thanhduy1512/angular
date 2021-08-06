import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../model/smartPhone';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.scss']
})
export class GioHangComponent implements OnInit {
  gioHang: Smartphone[];


  constructor() { }

  ngOnInit(): void {
  }

}
