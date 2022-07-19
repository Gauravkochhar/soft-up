import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public step = 1;
  selected!: Date;
  constructor() { }

  ngOnInit(): void {
  }

  next():void {
    this.step++;
  }
  prev():void {
    this.step--;
  }

  scrollSlide(isRight?:any) {
    if(isRight){
      (document.getElementById('horizontal_slider') as HTMLElement).scrollLeft +=150;
    }else {
      (document.getElementById('horizontal_slider') as HTMLElement).scrollLeft -=150;
    }
  }
}
