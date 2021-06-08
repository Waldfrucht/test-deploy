import { Component, OnInit } from '@angular/core';
import { Horse } from '../horse/horse';
import { Logger } from '../utilities/Logger';
import { HorseOverviewConstants } from './horseOverview-constants';
import { HorseOverviewService } from './horseOverviewService';
@Component({
    selector: 'app-horse-overview',
    templateUrl: './horseOverview.html',
    styleUrls: ['../app.component.css']
})

export class HorseOverviewComponent implements OnInit {
    horses: Horse[];
    basePath: string = HorseOverviewConstants.imgsBasePath;

    constructor(private horseOverviewService: HorseOverviewService, private logger: Logger) { }

    ngOnInit() {
        this.horses = this.horseOverviewService.getInfoFromAllHorses();
    }    
}
