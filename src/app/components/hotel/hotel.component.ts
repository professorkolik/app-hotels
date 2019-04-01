import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IHotel} from '../../models/hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.sass']
})
export class HotelComponent implements OnInit {
  @Input() public hotel: IHotel;
  @Output() public selectedHotel: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  public constructor() { }

  public ngOnInit(): void {
  }

  public onSelectHotel(hotel: IHotel): void {
    this.selectedHotel.emit(hotel);
  }

}
