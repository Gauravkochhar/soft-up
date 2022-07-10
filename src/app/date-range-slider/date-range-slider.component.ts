import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DURATION_FILTERS } from '../book-per-schedule/book-per-schedule.config';
import { BookPerScheduleService } from '../core/service/book-per-schedule.service';
import { CalenderService } from '../core/service/calender.service';

@Component({
  selector: 'app-date-range-slider',
  templateUrl: './date-range-slider.component.html',
  styleUrls: ['./date-range-slider.component.scss']
})
export class DateRangeSliderComponent implements OnInit {

  public durationFilter: any = DURATION_FILTERS;
  @Input() appliedFilter: any;
  @Input() activeBookingEventDetails: any = [];
  @Input() dateRangeList: any = [];
  @Output() dateRangeListChange = new EventEmitter();
  public highlistDateFilterList = [DURATION_FILTERS.daily.id];
  public todayDate: any;

  public tempDate: any;

  constructor(
    private calenderService: CalenderService,
    public bookPerScheduleService: BookPerScheduleService) { }

  ngOnInit(): void {
    this.todayDate = this.calenderService.getDateStringFromDate(new Date());
    console.log(this.todayDate);
  }

  getPreviousDays() {
    if(this.appliedFilter.id == DURATION_FILTERS.daily.id) {
      this.updateDetailsForWeekCalender(true, true);
    } else if(this.appliedFilter.id == DURATION_FILTERS.weekly.id) {
      this.updateDetailsForWeekCalender(false, true);
    } else if(this.appliedFilter.id == DURATION_FILTERS.monthly.id) {
      this.updateDetailsForMonthCalender(true);
    }
  }

  updateDetailsForWeekCalender(isDailyFilter: boolean, isPreviousDaysRequest: boolean) {
    this.tempDate = !this.tempDate ? new Date(): this.tempDate;
    isPreviousDaysRequest ? this.tempDate.setDate(this.tempDate.getDate() - (isDailyFilter ? 1: 7)): this.tempDate.setDate(this.tempDate.getDate() + (isDailyFilter ? 1: 7));
    const middleDayOfWeek = this.calenderService.getDateStringFromDate(this.tempDate)
    this.dateRangeList = this.calenderService.getWeekDaysList(middleDayOfWeek, 'dd/mm/yyyy');
    this.dateRangeListChange.emit(this.dateRangeList);
    this.bookPerScheduleService.updateFilterRangeInService(this.appliedFilter.id, this.dateRangeList);
  }

  updateDetailsForMonthCalender(isPreviousMonthRequest: boolean) {
    this.tempDate = !this.tempDate ? new Date(): this.tempDate;
    isPreviousMonthRequest ? this.tempDate.setMonth(this.tempDate.getMonth() - 1): this.tempDate.setMonth(this.tempDate.getMonth() + 1);
    this.dateRangeList = this.calenderService.getmonthDaysList(this.tempDate.getMonth()+1, this.tempDate.getFullYear());
    this.dateRangeListChange.emit(this.dateRangeList);
    this.bookPerScheduleService.updateFilterRangeInService(this.appliedFilter.id, this.dateRangeList);
  }

  getForwardDays() {
    if(this.appliedFilter.id == DURATION_FILTERS.daily.id) {
      this.updateDetailsForWeekCalender(true, false);
    } else if(this.appliedFilter.id == DURATION_FILTERS.weekly.id) {
      this.updateDetailsForWeekCalender(false, false);
    } else if(this.appliedFilter.id == DURATION_FILTERS.monthly.id) {
      this.updateDetailsForMonthCalender(false);
    }
  }

}
