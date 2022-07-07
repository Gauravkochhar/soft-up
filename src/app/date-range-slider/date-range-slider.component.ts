import { Component, Input, OnInit } from '@angular/core';
import { DURATION_FILTERS } from '../book-per-schedule/book-per-schedule.config';
import { BookPerScheduleService } from '../core/service/book-per-schedule.service';

@Component({
  selector: 'app-date-range-slider',
  templateUrl: './date-range-slider.component.html',
  styleUrls: ['./date-range-slider.component.scss']
})
export class DateRangeSliderComponent implements OnInit {

  public durationFilter: any = DURATION_FILTERS;
  @Input() appliedFilter: any;
  @Input() activeBookingEventDetails: any = [];
  public highlistDateFilterList = [DURATION_FILTERS.daily.id];

  constructor(public bookPerScheduleService: BookPerScheduleService) { }

  ngOnInit(): void {
  }

}
