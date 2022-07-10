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

  getDateStringFromDate(dateObj: any) {
    const date = new Date(dateObj);
    const [dd, mm, yyyy] = [date.getDate(), date.getMonth()+1, date.getFullYear()] 
    return `${dd < 10 ? '0'+dd : dd}/${mm < 10 ? '0'+mm: mm }/${yyyy}`;
  }

  getWeekDaysList(customDate?: any, format?: any) {
    let ngDate = customDate ? new Date(customDate): new Date();
    if(customDate) {
      if(format == 'mm/dd/yyyy') {
        ngDate = new Date(customDate)
      } else if(format == 'dd/mm/yyyy') {
        const arr = customDate.split('/');
        ngDate = new Date(`${arr[1]}/${arr[0]}/${arr[2]}`)
      }
    } else {
      ngDate = new Date();
    }
    ngDate.setDate(ngDate.getDate() + 4);
    return Array(7).fill(1).map((elm, i) => {
      ngDate.setDate(ngDate.getDate() - 1);
      const [dd, mm, yyyy] = [new Date(ngDate).getDate(), new Date(ngDate).getMonth()+1, new Date(ngDate).getFullYear()] 
      return {
        dd,
        mm,
        yyyy,
        formatDate: `${dd < 10 ? '0'+dd : dd}/${mm < 10 ? '0'+mm: mm }/${yyyy}`,
        weekDay: weekDay[ngDate.getDay()]
      }
    })
  }

  getmonthDaysList(monthNo: number, year: number) {
    let monthDays: any= [];
    const firstDayOfMonth = new Date(year, monthNo-1, 1);
    Array(31).fill(1).forEach((elm, i) => {
      const newDaysMonthNo = firstDayOfMonth.getMonth() + 1;
      const [dd, mm, yyyy] = [new Date(firstDayOfMonth).getDate(), new Date(firstDayOfMonth).getMonth()+1, new Date(firstDayOfMonth).getFullYear()] 
      if(monthNo == newDaysMonthNo) {
        monthDays.push({
          dd,
          mm,
          yyyy,
          formatDate: `${dd < 10 ? '0'+dd : dd}/${mm < 10 ? '0'+mm: mm }/${yyyy}`,
          weekDay: weekDay[firstDayOfMonth.getDay()]
        })
      }
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    })
    return monthDays;
  }
}
