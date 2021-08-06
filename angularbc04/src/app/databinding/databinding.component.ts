import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss'],
})

//auto detection
export class DatabindingComponent implements OnInit {
  email: string;
  fullName: string;

  constructor() {}

  ngOnInit(): void {}

  setName(val: string) {
    this.fullName = val;
  }
}
