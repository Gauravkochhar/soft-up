import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './core/component/header/header.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { CalenderComponent } from './calender/calender.component';
import { BookPerScheduleComponent } from './book-per-schedule/book-per-schedule.component';
import {MatMenuModule} from '@angular/material/menu';
import { EventCardComponent } from './event-card/event-card.component';
import { CalenderDayComponent } from './calender-day/calender-day.component';


const environmentConfig: any = environment.logger;

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, DashboardComponent, PageNotFoundComponent, CalenderComponent, BookPerScheduleComponent, EventCardComponent, CalenderDayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SlickCarouselModule,
    MatMenuModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel[environmentConfig.level],
    } as any),
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
