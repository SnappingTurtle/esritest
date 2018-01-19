import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import  Map = require('esri/Map');
//import  MapView = require('esri/views/MapView');

// also import the "angular2-esri-loader" to be able to load JSAPI modules
import { EsriLoaderService } from 'angular2-esri-loader';

import Map = require('esri/Map');
//import MapView = require('esri/views/MapView');
//import Draw = require('esri/views/2d/draw/Draw');


@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  // for JSAPI 4.x you can use the "any for TS types
  public mapView: __esri.MapView;

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  constructor(
    private esriLoader: EsriLoaderService
  ) { }

  public ngOnInit() {
    //this.initMap();
    // only load the ArcGIS API for JavaScript when this component is loaded
    let api: Promise<Function> = this.esriLoader.load({
      url: 'https://js.arcgis.com/4.6/'
      //url: 'http://localhost:4200/arcgis46.js'
      //url: 'http://localhost:8080/4.6/dojo/dojo.js'
    })
    
    // now load the modules
    let modules: Promise<any> = api.then((blah) => {
      
      this.esriLoader.loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/views/2d/draw/Draw'
      ]).then(([
        Map,
        MapView,
        Draw
      ]: [ 
        __esri.MapConstructor, 
        __esri.MapViewConstructor, 
        __esri.DrawConstructor
        ]) => {
        /*const mapProperties: __esri.MapProperties = {
          basemap: 'hybrid'
        };
        
        const map = new Map(mapProperties);

        const mapViewProperties: __esri.MapViewProperties = {
          // create the map view at the DOM element in this component
          container: this.mapViewEl.nativeElement,
          // supply additional options
          center: [-12.287, -37.114],
          zoom: 12,
          map // property shorthand for object literal
        };

        this.mapView = new MapView(mapViewProperties);
        const danno: __esri.DrawProperties = {
          view: this.mapView
        }
        const draw = new Draw(danno);

        // all of the pure interfaces can be reached at __esri.whatever
        // use them for properties interfaces for example
        // need to pass all module refs to initMap to be able to use objects*/
        this.initMap(Map, MapView, Draw);
      });
    });
  }

  initMap(Map, MapView, Draw) {
  //initMap() {
    const mapProperties: __esri.MapProperties = {
          basemap: 'streets'
        };
    const map = new Map(mapProperties);
    const mapViewProperties: __esri.MapViewProperties = {
          // create the map view at the DOM element in this component
          container: this.mapViewEl.nativeElement,
          // supply additional options
          center: [-75.568183, 45.433702],
          zoom: 13,
          map // property shorthand for object literal
        };
    this.mapView = new MapView(mapViewProperties);
  }

  startMap() {
    //const mymap = new Map({});
  }

}