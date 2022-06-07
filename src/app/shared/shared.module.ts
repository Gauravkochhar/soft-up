import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationCardComponent } from './component/location-card/location-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const MAT_MODULES = [
  MatProgressBarModule
];

@NgModule({
  declarations: [
    LocationCardComponent
  ],
  imports: [
    CommonModule,
    MAT_MODULES
  ],
  exports: [
    LocationCardComponent,
    MAT_MODULES
  ]
})
export class SharedModule { }
