import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  leftSlideConfig = {
    slidesToShow:2.8, 
    slidesToScroll:1,
    centerMode:true,
    vertical:true,
    dots:false,
    nav:false,
    infinite: false,
    verticalSwiping: true,
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
    centerPadding: '10',
    prevArrow: "<button type='button' class='slick-prev pull-left'><img width='30px' height='30px' src='assets/images/arrow-left.jpeg'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img width='30px' height='30px' src='assets/images/arrow-right.jpeg'></button>",
  };
  
  slides = [
    {heading:'City View', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus neque augue, bibendum auctor lectus blandit sit amet. Nullam neque risus, feugiat a ligula nec, rutrum imperdiet felis.'},
    {heading:'Saran', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus neque augue, bibendum auctor lectus blandit sit amet. Nullam neque risus, feugiat a ligula nec, rutrum imperdiet felis.'},
    {heading:'Back to the nast', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus neque augue, bibendum auctor lectus blandit sit amet. Nullam neque risus, feugiat a ligula nec, rutrum imperdiet felis.'},
    {heading:'demo 1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus neque augue, bibendum auctor lectus blandit sit amet. Nullam neque risus, feugiat a ligula nec, rutrum imperdiet felis.'}
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
