import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HorseDetailService } from '../horseDetail/HorseDetailService';
import { Horse } from '../horse/horse';
import { Logger } from '../utilities/Logger';

@Component({
    selector: 'app-horse-detail',
    templateUrl: './horseDetail.html',
    styleUrls: ['../app.component.css']
})

export class HorseDetailComponent implements OnInit{
  title = 'horseDetail';
  horseData: Horse;

  constructor(
    private route: ActivatedRoute,
    private horseDetailService: HorseDetailService,
//     private logger: Logger
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.horseData = this.horseDetailService.getHorse(name);
    /*this.logger.log(this.horseData);
    this.horseData.imgPaths.forEach(element => {
      this.logger.log(element);
    }); */
  }

}
