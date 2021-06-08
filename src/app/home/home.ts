import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-main-start',
    templateUrl: './home.html',
    styleUrls: ['../app.component.css']
})

export class MainStartComponent implements OnInit {
  title = 'horseDetail';
  backgroundImgURL = './assets/images/Background/Hintergrund_Pferd.jpg';
  @Output() urlEvent = new EventEmitter<string>();


  ngOnInit() {
  }
}
