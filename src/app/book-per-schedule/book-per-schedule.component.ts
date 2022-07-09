import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';import { Subscription } from 'rxjs';
;
import { ApiService } from '../core/service/api.service';
import { BookPerScheduleService } from '../core/service/book-per-schedule.service';
import { CalenderService } from '../core/service/calender.service';
import { DeviceService } from '../core/service/device.service';
import { BOOKING_EVENTS_API_RESPONSE_KEYS, DEFAULT_DATE_RANGE_LIST, DEVICE_WISE_FILTER, DURATION_FILTERS } from './book-per-schedule.config';
@Component({
  selector: 'app-book-per-schedule',
  templateUrl: './book-per-schedule.component.html',
  styleUrls: ['./book-per-schedule.component.scss']
})
export class BookPerScheduleComponent implements OnInit, OnDestroy {
  public durationFilter: any = DURATION_FILTERS;
  public appliedFilter = DURATION_FILTERS.daily;
  public totalFilterList: any[] | undefined;
  requestingServerForBannerText = false;
  public locationFilterList: any = [];
  public bookingEventDetails: any;
  public activeBookingEventDetails: any[] = DEFAULT_DATE_RANGE_LIST;
  public bookEventColourDetails: any = {};
  public clickedLocationInfo:any;
  public isLocationPopupActive:boolean = false;
  public scrollChangeSubs:Subscription | undefined;
  @ViewChild('stickyHeader', {static:true}) stickyHeader:any;
  @ViewChild('dropdownMenuButton', {static:true}) dropdownMenuButton:any;
  @ViewChild('dateRangePicker', {static:true}) dateRangePicker:any;
  public date = new FormControl();


  @ViewChild(MatMenuTrigger) trigger: any;
  // public selected: Date | null;
  constructor(
    private apiService: ApiService,
    private deviceService: DeviceService,
    public calenderService: CalenderService,
    private cdRef: ChangeDetectorRef,
    public bookPerScheduleService: BookPerScheduleService) { }

  ngOnInit(): void {
    this.loadBannerText();
    this.getBookingEventList();
    this.totalFilterList = DEVICE_WISE_FILTER[this.deviceService.deviceType];
    this.bookPerScheduleService.activeFilterId = this.appliedFilter.id;
    this.scrollChangeSubs = this.deviceService.scrollPositionChange.subscribe(()=>{
      if (this.deviceService.scrollY > 10) {
        this.stickyHeader.nativeElement.classList.add("sticky-top");
      } else {
        this.stickyHeader.nativeElement.classList.remove("sticky-top");
      }
    })
  }

  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }

  loadBannerText() {
    this.requestingServerForBannerText = true;
    setTimeout(() => {
      this.apiService.getBannerTextList().subscribe((response: any) => {
        this.locationFilterList = response.section;
        this.locationFilterList.forEach((elm: any) => {
          this.bookEventColourDetails[elm.id] = elm.bookEventColor;
        })
        this.requestingServerForBannerText = false;
      })
    }, 1000)
  }

  getBookingEventList() {
    this.apiService.getBookPerData().subscribe((response: any) => {
      this.bookingEventDetails = response;
      this.activeBookingEventDetails = this.bookingEventDetails[BOOKING_EVENTS_API_RESPONSE_KEYS[this.appliedFilter.id]];
    })
  }

  openDropdown(event:any) {
    event.stopPropagation();
  }

  onSelectDurationFilter(event: any, menu1: any, filter: any) {
    event.stopPropagation();
    this.trigger.closeMenu();
    this.onFilterChange(filter);
  }

  onFilterChange(newFilter: any) {
    if(this.appliedFilter.id != newFilter.id) {
      this.appliedFilter = newFilter;
      this.activeBookingEventDetails = this.bookingEventDetails[BOOKING_EVENTS_API_RESPONSE_KEYS[this.appliedFilter.id]];
      this.bookPerScheduleService.activeFilterId = this.appliedFilter.id;
      this.restoreFilterService();
      this.updateFilterRangeInService();
    }
  }

  restoreFilterService() {
    this.bookPerScheduleService.activeFilterDate = '';
    this.bookPerScheduleService.activeWeeklyFilterRange = {startDate: '', endDate: ''};
    this.bookPerScheduleService.activeMonthlyFilterRange = {startDate: '', endDate: ''};
  }

  updateFilterRangeInService() {
    if(this.appliedFilter.id == this.durationFilter.weekly.id) {
      const startDate = this.activeBookingEventDetails.length ? this.activeBookingEventDetails[0].date: '';
      const endDate = this.activeBookingEventDetails[this.activeBookingEventDetails.length-1].date;
      this.bookPerScheduleService.activeWeeklyFilterRange = {
        startDate,
        endDate
      }
    }
    if(this.appliedFilter.id == this.durationFilter.monthly.id) {
      const startDate = this.activeBookingEventDetails.length ? this.activeBookingEventDetails[0].date: '';
      const endDate = this.activeBookingEventDetails[this.activeBookingEventDetails.length-1].date;
      this.bookPerScheduleService.activeMonthlyFilterRange = {
        startDate,
        endDate
      }
    }
  }

  getDateFilterRange(event: any, datePickerRef: any) {
    // datePickerRef._userSelection.emit({closed: true})
    // this.dropdownMenuButton.nativeElement.click();
    document.getElementById('dropdownMenuButton')?.click();
    this.date.setValue(event);
  }

  ngOnDestroy(): void {
    this.scrollChangeSubs?.unsubscribe();
  }
}
