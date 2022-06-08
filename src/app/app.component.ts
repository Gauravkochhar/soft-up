import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public scrollPosition: any;
  title = 'soft-chaos';

  constructor() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    this.scrollPosition = event.target.scrollTop;
  };
}

