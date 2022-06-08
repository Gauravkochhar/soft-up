import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollPosition: number = 0;
  scrolled: boolean = false;
  @Input() isScrolled: boolean = false;

  constructor(public elmRef: ElementRef
  ) {
  }

  ngOnInit(): void {
  }

}
