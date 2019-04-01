import { Component, OnInit, Input } from '@angular/core';
import {IProfile} from '../../models/hotel.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  @Input() public profile: IProfile;
  constructor() { }

  ngOnInit() {
  }

}
