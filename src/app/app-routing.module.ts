import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPerScheduleComponent } from './book-per-schedule/book-per-schedule.component';
// import { BookPerScheduleComponent } from './book-per-schedule/book-per-schedule.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'book-per-tour',
    component: BookPerScheduleComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
