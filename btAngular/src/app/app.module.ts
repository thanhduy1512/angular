import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';
import { HomeComponent } from './home/home.component';
import { SmartPhoneListComponent } from './smart-phone-list/smart-phone-list.component';
import { CategoryComponent } from './category/category.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartPhoneComponent,
    HomeComponent,
    SmartPhoneListComponent,
    CategoryComponent,
    GioHangComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
