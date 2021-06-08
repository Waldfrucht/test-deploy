import { Injectable } from '@angular/core';
import { Logger } from '../utilities/Logger';
import HorseImgs from '../../assets/jsons/imgs.json';

@Injectable({
  providedIn: 'root',
})

export class GaleryDetailService {

  constructor(private logger: Logger) { }

  getImgsInFolder(name): string[] {
    return this.getImgsFromCategory(name);
  }

  private getImgsFromCategory(searchName): string[] {
    const foldersWithImgs = HorseImgs;
    let imgPaths: string[] = foldersWithImgs
                    .find(folder => folder.name.toLowerCase() === searchName.toLowerCase())
                    .paths;
    if (imgPaths === undefined) {
      imgPaths = [];
    }
    return imgPaths;
  }
}
