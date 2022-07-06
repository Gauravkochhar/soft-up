import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookPerScheduleService {

  public activeFilterId: any;
  public activeFilterDate: any;
  public activeWeeklyFilterRange: any;
  public activeMonthlyFilterRange: any;

  constructor() { }
}
