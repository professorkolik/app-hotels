import { Component, OnInit } from '@angular/core';
import * as Data from '../../data/hotels.json';

@Component({
  selector: 'app-hotels',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.sass']
})
export class AppHotelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(Data.hotels);
  }

}
