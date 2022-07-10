import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TIME_SLOTS } from '../core/config/device.config';

@Component({
  selector: 'app-calender-month',
  templateUrl: './calender-month.component.html',
  styleUrls: ['./calender-month.component.scss']
})
export class CalenderMonthComponent implements OnInit, OnChanges {

  public readonly TIME_SLOTS = TIME_SLOTS;
  @Input() activeBookingEventDetails: any;
  @Input() bookEventColourDetails: any = {};
  public totalMonthDays:any;
  @Output() viewLocation = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.totalMonthDays = this.activeBookingEventDetails && this.activeBookingEventDetails.length;
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

  viewEvent(eventDetail:any){
    if(eventDetail && eventDetail.eventLocationDetail) {
      const locationCard = {...eventDetail.eventLocationDetail, id:eventDetail.eventLocationDetail.locationId};
      this.viewLocation.emit(locationCard);
    }
  } 
}
