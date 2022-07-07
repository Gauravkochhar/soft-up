import { Pipe, PipeTransform } from '@angular/core';
import { weekDay } from 'src/app/book-per-schedule/book-per-schedule.config';

@Pipe({
  name: 'findDay'
})
export class FindDayPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const dateValue = value ? value.split('/'): [];
    console.log(dateValue)
    if(dateValue.length == 3) {
      const findDate: any = new Date(`${dateValue[1]}/${dateValue[0]}/${dateValue[2]}`);
      return weekDay[findDate.getDay()].slice(0, 3)
    } else {
      console.log('value')
      return value;
    }
  }

}
