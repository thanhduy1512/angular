import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { CrudProductExerciseComponent } from './crud-product-exercise/crud-product-exercise.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { BookingBusComponent } from './booking-bus/booking-bus.component';
import { SeatItemComponent } from './seat-item/seat-item.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    HomeComponent,
    DatabindingComponent,
    DemoDirectiveComponent,
    CrudProductExerciseComponent,
    StudentListComponent,
    StudentItemComponent,
    BookingBusComponent,
    SeatItemComponent,
    ModelsComponent,
  ],
  imports: [BrowserModule, FormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
