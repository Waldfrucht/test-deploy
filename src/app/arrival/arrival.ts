import { Component, OnInit, ViewChild} from '@angular/core';
import { GoogleMap, MapMarker, MapInfoWindow } from '@angular/google-maps'
import { NONE_TYPE } from '@angular/compiler';

@Component({
    selector: 'app-arrival',
    templateUrl: './arrival.html',
    styleUrls: ['../app.component.css']
})

export class ArrivalComponent implements OnInit {
  title = 'ArrivalInfo';
  
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  zoom = 15;
  latitude = 49.265655;
  longitude = 11.308424;
  center: google.maps.LatLngLiteral = {lat: this.latitude, lng: this.longitude};
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 10,
    fullscreenControl: false,
    streetViewControl: false,
    // gestureHandling: "none",

  }

  markers = [];
  infoContent = ''

  ngOnInit() :void {
    this.addMarker();
     
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
      // label: {
      //   color: 'black',
      //   text: 'Reitschule Schubert ',
      // },
      title: 'Unsere Reitschule ',
      info: 'Reitschule Schuber',
      options: { animation: google.maps.Animation.DROP },
    })
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }
}
