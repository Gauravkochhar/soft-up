import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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


  slideConfig = {
    slidesToShow:1.7, 
    slidesToScroll:1,
    centerMode:true,
    vertical:true,
    dots:true
  };
  
}
