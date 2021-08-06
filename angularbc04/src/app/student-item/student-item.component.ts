import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {

  @Input() student: { name: string, age: number };
  @Output() studentEmiter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChooseStudent() {
    this.studentEmiter.emit(this.student);
  }

}
