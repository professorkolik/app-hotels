import { Component, Input } from '@angular/core';
import { IWeather } from '../../models/hotel.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent {
  @Input() public weather: IWeather;

  public constructor() { }
}
