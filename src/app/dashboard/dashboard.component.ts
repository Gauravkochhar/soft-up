import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  leftSlideConfig = {
    slidesToShow:1, 
    slidesToScroll:1,
    centerMode:true,
    vertical:true,
    dots:true,
    infinite: false,
    verticalSwiping: false,
    adaptiveHeight: true,
    centerPadding: '0px'
    
  };
  rightSlideConfig = {
    slidesToShow:2, 
    slidesToScroll:1,
    centerMode:false,
    vertical:false,
    dots:true,
    infinite: false,
    adaptiveHeight: true,
    centerPadding: '20'
  };
  
  slides = [
    {img: "assets/images/agc6202.png"},
    {img: "assets/images/agc6202.png"},
    {img: "assets/images/agc6202.png"},
    {img: "assets/images/agc6202.png"}
  ];
  images = [
    'assets/logo/place.png',
    'assets/logo/place.png',
    'assets/logo/place.png'
  ];
  
  constructor() {
  }

  ngOnInit(): void {
  }
  
  afterLocationSliderChange($event: any) {
    debugger
  }
}
