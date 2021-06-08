import { Injectable } from '@angular/core';
import { Logger } from '../utilities/Logger';
import HorseInfo from '../../assets/jsons/horses.json';
import { Horse } from '../horse/horse';

@Injectable({
  providedIn: 'root',
})

export class HorseOverviewService {

  constructor(private logger: Logger) { }

  public getInfoFromAllHorses(): Horse[] {
    let horses : Horse[] =  HorseInfo as Horse[];
    return horses;
  }
}
