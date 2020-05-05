import { Injectable, Version } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ClockService {

    private getTime() {      
      return ('0' + new Date().getHours()).slice(-2)  + ':' + ('0' + new Date().getMinutes()).slice(-2) + ':' + ('0' + new Date().getSeconds()).slice(-2);

    }
    GenerateTimeNow(delay: number, callback: (clock) => void) {
      callback(this.getTime());
      setInterval(() => callback(this.getTime()), delay);
    }
  }