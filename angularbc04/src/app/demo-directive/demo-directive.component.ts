import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss'],
})
export class DemoDirectiveComponent implements OnInit {
  // isSick = false;
  // month = 0;
  monthOptions = [
    { value: 1, label: 'Tháng 1' },
    { value: 2, label: 'Tháng 2' },
    { value: 3, label: 'Tháng 3' },
    { value: 4, label: 'Tháng 4' },
  ];
  constructor() {}

  ngOnInit(): void {}

  // onFeel(val: boolean) {
  //   this.isSick = val;
  // }

  
  isLogin = true;

  username: string;
  password: string;

  onLogin() {
    if (this.username === 'cybersoft' && this.password === 'cybersoft') {
      this.isLogin = true
    }
  }
}
