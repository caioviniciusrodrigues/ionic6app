import { Injectable, Version } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ClockService {

    private getTime() {
      return new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    }
    GenerateTimeNow(delay: number, callback: (clock) => void) {
      callback(this.getTime());
      setInterval(() => callback(this.getTime()), delay);
    }
  }