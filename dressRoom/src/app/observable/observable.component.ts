import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const a = new Observable((observer) => {
      setTimeout(() => {
        observer.next('data');
        observer.next('data2');
        observer.next('data3');
      }, 2000);
    });
    a.subscribe((res) => {
      console.log(res);

    })
  }

}
