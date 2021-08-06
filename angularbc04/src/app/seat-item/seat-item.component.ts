import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seat } from '../models/seat';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss']
})
export class SeatItemComponent implements OnInit {

  @Input() seat: Seat;
  @Output() seatEmiter = new EventEmitter();

  constructor() { }
  isBooking = false;
  ngOnInit(): void {
  }
  onChooseSeat() {
    if (this.seat.TrangThai) return;
    this.seatEmiter.emit(this.seat);
    this.isBooking = !this.isBooking;
  }
}
