import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import HorseImgs from '../../assets/jsons/imgs.json';
import { GaleryDetailService } from './GaleryDetailService';

@Component({
  selector: 'app-gallery',
  templateUrl: './galleryDetail.html',
  styleUrls: ['../app.component.css']
})

export class GalleryDetailComponent implements OnInit {
  title = 'GaleryDetail';
  galeryImgs: string[];
  folderName: string;

  constructor(
    private route: ActivatedRoute,
    private galeryDetailService: GaleryDetailService
  ) {}

  ngOnInit() {
    this.folderName = this.route.snapshot.paramMap.get('name');
    this.galeryImgs = this.galeryDetailService.getImgsInFolder(this.folderName);
  }
}
