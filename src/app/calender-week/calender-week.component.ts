import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TIME_SLOTS } from '../core/config/device.config';

@Component({
  selector: 'app-calender-week',
  templateUrl: './calender-week.component.html',
  styleUrls: ['./calender-week.component.scss']
})
export class CalenderWeekComponent implements OnInit {

  public readonly TIME_SLOTS = TIME_SLOTS;
  @Input() activeBookingEventDetails: any;
  @Input() bookEventColourDetails: any = {};
  @Output() viewLocation = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getDayWiseEvent(date: any) {
    return this.activeBookingEventDetails.find((elm: any) => elm.date == date).slots;
  }

  getSlotDetail(slotTime: any, slots: any) {
    return slots.find((elm: any) => elm.eventStartTime.hour == slotTime);
  }

  viewEvent(eventDetail:any){
    if(eventDetail && eventDetail.eventLocationDetail) {
      const locationCard = {...eventDetail.eventLocationDetail, id:eventDetail.eventLocationDetail.locationId};
      this.viewLocation.emit(locationCard);
    }
  } 

}
