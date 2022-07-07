import { Component, Input, OnInit } from '@angular/core';
import { TIME_SLOTS } from '../core/config/device.config';
import { BookPerScheduleService } from '../core/service/book-per-schedule.service';

@Component({
  selector: 'app-calender-day',
  templateUrl: './calender-day.component.html',
  styleUrls: ['./calender-day.component.scss']
})
export class CalenderDayComponent implements OnInit {

  public readonly TIME_SLOTS = TIME_SLOTS;
  @Input() activeBookingEventDetails: any;
  @Input() bookEventColourDetails: any = {};
  public selectedDate: any;

  constructor(
    private bookPerScheduleService: BookPerScheduleService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.activeBookingEventDetails.length) {
      this.selectedDate = this.activeBookingEventDetails[3].date;
      this.bookPerScheduleService.activeFilterDate = this.selectedDate;
    }
  }

  getDayWiseEvent(date: any) {
    if(date) {
      return this.activeBookingEventDetails.find((elm: any) => elm.date == date).slots;
    } else {
      return [];
    }
  }

  getSlotDetail(slotTime: any, slots: any) {
    return slots.find((elm: any) => elm.eventStartTime.hour == slotTime);
  }


}