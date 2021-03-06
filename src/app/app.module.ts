import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListComponent } from './components/list/list.component';
import { AppHotelsComponent } from './components/app-hotels/app-hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ProfileComponent,
    ListComponent,
    AppHotelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
