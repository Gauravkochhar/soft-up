import { Component, Input, OnInit } from '@angular/core';
import { TIME_SLOTS } from '../core/config/device.config';

@Component({
  selector: 'app-calender-month',
  templateUrl: './calender-month.component.html',
  styleUrls: ['./calender-month.component.scss']
})
export class CalenderMonthComponent implements OnInit {

  public readonly TIME_SLOTS = TIME_SLOTS;
  @Input() activeBookingEventDetails: any;
  @Input() bookEventColourDetails: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getDayWiseEvent(date: any) {
    return this.activeBookingEventDetails.find((elm: any) => elm.date == date).slots;
  }

  getSlotDetail(slotTime: any, slots: any) {
    return slots.find((elm: any) => elm.eventStartTime.hour == slotTime);
  }

  getInitital(text: string) {
    return (text.split(' ').map((word: any) => word[0])).join('');
  }
}