import { Component, OnInit } from '@angular/core';
import HorseImgs from '../../assets/jsons/imgs.json';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.html',
    styleUrls: ['../app.component.css']
})

export class GalleryComponent  implements OnInit {
  title = 'Galery';

  ngOnInit() {
  }
}
