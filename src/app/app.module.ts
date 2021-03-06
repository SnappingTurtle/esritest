import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';

import { EsriLoaderService } from 'angular2-esri-loader';
//import { EsriMapComponent } from './esri-map/esri-map.component';

//import Map = require('esri/Map');

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EsriLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
