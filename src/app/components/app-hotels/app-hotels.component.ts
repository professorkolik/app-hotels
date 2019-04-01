import { Component, OnInit } from '@angular/core';
import { hotels as Data} from '../../data/hotels.json';
import { IHotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotels',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.sass']
})
export class AppHotelsComponent implements OnInit {

  public hotels: IHotel[] = Data;
  public selectedHotel: IHotel = null;

  public constructor() { }

  public ngOnInit(): void {
    this.selectedHotel = this.hotels[0];
  }

  public onSelectedHotel(selectedHotel: IHotel): void {
    this.selectedHotel = selectedHotel;
  }

}
