import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-per-schedule',
  templateUrl: './book-per-schedule.component.html',
  styleUrls: ['./book-per-schedule.component.scss']
})
export class BookPerScheduleComponent implements OnInit {
  public month:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
