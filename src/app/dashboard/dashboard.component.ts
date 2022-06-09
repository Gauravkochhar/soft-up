import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  horizontalSlideNumber: any = 1;
  VerticalSlideNumber: any = 1;
  leftSlideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    vertical: true,
    dots: false,
    nav: false,
    infinite: false,
    verticalSwiping: true,
    centerPadding: '75px',
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
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    vertical: false,
    dots: true,
    infinite: false,
    adaptiveHeight: false,
    centerPadding: '30',
    variableWidth: true,
    variableHeight: true,
    speed: 500,
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
    prevArrow: "<button type='button' matRipple class='slick-prev pull-left'><img width='30px' height='30px' src='assets/images/arrow-left.jpeg'></button>",
    nextArrow: "<button type='button' matRipple class='slick-next pull-right'><img width='30px' height='30px' src='assets/images/arrow-right.jpeg'></button>",
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
    console.log('loadBannerLocations')
    this.requestingServerForLocations = true;
    this.bannerLocationList = [];
    setTimeout(() => {
      this.apiService.getNewLocationsForBanner().subscribe((response: any) => {
        this.bannerLocationList = response.location;
        this.requestingServerForLocations = false;
      })
    }, 1000)
  }


  afterMasterCarouselChange(event: any, slaveCarousel: any) {
    this.VerticalSlideNumber = event.currentSlide + 1;
    slaveCarousel.slickGoTo(0);
  }

  afterSlaveCarouselChange(event: any) {
    console.log(event);
    this.horizontalSlideNumber = event.currentSlide + 1;
  }

  onBannerCountClick(masterCarousel: any, slaveCarousel: any, requestedSlideNumber: number) {
    masterCarousel.slickGoTo(requestedSlideNumber);
    slaveCarousel.slickGoTo(0);
  }

}
