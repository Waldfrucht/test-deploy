import { Injectable } from '@angular/core';
@Injectable()
export class Logger {
  public log(msg: any) {
    console.log(new Date() + ': '
      + JSON.stringify(msg));
  }
}
