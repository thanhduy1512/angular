import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList = [
    { name: "Hieu", age: 12 },
    { name: "Dung", age: 13 },
    { name: "Tai", age: 14 },
    { name: "Nguyen", age: 15 },
  ]

  constructor() { }

  selectedStudent: { name: string, age: number };

  onSetSelectedStudent(e) {
    this.selectedStudent = e;
  }

  ngOnInit(): void {
  }

}
