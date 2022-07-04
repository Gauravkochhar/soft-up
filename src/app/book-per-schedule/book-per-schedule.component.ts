import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-per-schedule',
  templateUrl: './book-per-schedule.component.html',
  styleUrls: ['./book-per-schedule.component.scss']
})
export class BookPerScheduleComponent implements OnInit {
  public month:any=[];
  // public selected: Date | null;
  constructor() { }

  ngOnInit(): void {
    this.getFullMonth();
  }

  getFullMonth(){
    for(let i = 0; i <= 30; i++) {
      this.month.push(i+1);
    }
  }

  openDropdown(event:any) {
    event.stopPropagation();
  }

}
