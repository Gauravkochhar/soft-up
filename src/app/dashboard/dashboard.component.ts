import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ApiService } from '../core/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  requestingServerForBannerText = false;
  requestingServerForLocations = false;
  bannerLocationList: any = [];
  bannerTextList: any = [];

  public isScrolled: any = false;
  horizontalSlideNumber: any = 1;
  leftSlideConfig = {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: false,
    vertical: true,
    dots: false,
    nav: false,
    infinite: false,
    verticalSwiping: true,
    adaptiveHeight: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1.2,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1.2,
        }
      }
    ]
  };
  rightSlideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    vertical: false,
    dots: true,
    infinite: false,
    adaptiveHeight: false,
    centerPadding: '10',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1.2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1.6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        }
      }
    ],
    prevArrow: "<button type='button' class='slick-prev pull-left'><img width='30px' height='30px' src='assets/images/arrow-left.jpeg'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img width='30px' height='30px' src='assets/images/arrow-right.jpeg'></button>",
  };

  constructor(private apiService: ApiService) {
    this.loadBannerText();
    this.loadBannerLocations();
  }

  ngOnInit(): void {
  }

  loadBannerText() {
    this.requestingServerForBannerText = true;
    setTimeout(() => {
      this.apiService.getBannerTextList().subscribe((response: any) => {
        this.bannerTextList = response.section;
        this.requestingServerForBannerText = false;
      })
    }, 1000)
  }

  loadBannerLocations() {
    this.requestingServerForLocations = true;
    setTimeout(() => {
      this.apiService.getNewLocationsForBanner().subscribe((response: any) => {
        this.bannerLocationList = response.location;
        this.requestingServerForLocations = false;
      })
    }, 2000)
  }

  afterChange(event: any) {
    console.log(event);
    this.horizontalSlideNumber = event.currentSlide + 1;
  }

}
