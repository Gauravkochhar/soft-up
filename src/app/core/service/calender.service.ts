import { Injectable } from '@angular/core';
import { months, weekDay } from 'src/app/book-per-schedule/book-per-schedule.config';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  constructor() { }

  getTodayDay() {
    const todayDate = new Date();
    return weekDay[todayDate.getDay()];
  }

  getDay(checkDate: any) {
    const dateObj = new Date(checkDate);
    return weekDay[dateObj.getDay()];
  }
  
  getMonthFromDate(checkDate: any) {
    const dateObj = new Date(checkDate);
    return months[dateObj.getMonth()+1];
  }
}
