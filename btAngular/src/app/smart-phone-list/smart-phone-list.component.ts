import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { SmartPhoneService } from 'src/services/smart-phone.service';
import { Smartphone } from '../model/smartPhone';

@Component({
  selector: 'app-smart-phone-list',
  templateUrl: './smart-phone-list.component.html',
  styleUrls: ['./smart-phone-list.component.scss']
})
export class SmartPhoneListComponent implements OnInit {

  constructor(private smartPhoneSv: SmartPhoneService, private categorySv: CategoryService) { }
  smartphoneList: Smartphone[];

  ngOnInit(): void {
    this.smartphoneList = this.smartPhoneSv.smartPhoneList;
    // this.smartphoneList = this.smartPhoneSv.smartPhoneList.filter(item => item.type === this.categorySv.selectedCategory);
    this.categorySv.selectedCategoryEmitter.subscribe((val) => {
      this.smartphoneList = this.smartPhoneSv.smartPhoneList.filter(item => item.type === val)
    })
  }

}
