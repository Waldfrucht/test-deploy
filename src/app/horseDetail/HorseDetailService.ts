import { Injectable } from '@angular/core';
import { Horse } from '../horse/horse';
import { Logger } from '../utilities/Logger';
import HorsesJson from '../../assets/jsons/horses.json';

@Injectable({
  providedIn: 'root',
})


export class HorseDetailService {

defaultHorse: Horse = {
    id: '-',
    name: '-',
    baseImg : '-',
    birthday: '-',
    gender: '-',
    size: 0,
    race: '-',
    description: '-',
    imgPaths: []
};

  constructor(private logger: Logger) { }

  getHorse(name): Horse {
    const horseInfo = this.getHorseInfo(name);
//     this.logger.log(horseInfo);
    return horseInfo;
  }

  private getHorseInfo(searchName): Horse {
    const horses: Horse[] = HorsesJson as Horse[];
    let horseSelected: Horse = horses.find(horse => horse.id.toLowerCase() === searchName.toLowerCase());
    if (horseSelected === undefined) {
        horseSelected = this.defaultHorse;
    }
    return horseSelected;
  }
}
