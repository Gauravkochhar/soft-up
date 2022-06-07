import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  images = [
    'assets/logo/place.png',
    'assets/logo/place.png',
    'assets/logo/place.png'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
