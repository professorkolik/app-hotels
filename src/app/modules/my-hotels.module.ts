import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from '../components/weather/weather.component';
import { ListComponent } from '../components/list/list.component';
import { ProfileComponent } from '../components/profile/profile.component';

@NgModule({
  declarations: [
    ListComponent,
    WeatherComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyHotelsModule { }
