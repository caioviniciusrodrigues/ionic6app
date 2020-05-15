import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { Plataform, Platform } from '@ionic/angular';

@Component({
  selector: 'app-view-ponto',
  templateUrl: './view-ponto.page.html',
  styleUrls: ['./view-ponto.page.scss'],
})
export class ViewPontoPage implements OnInit {

  picker: DatePicker;
  selectedDate: string;
  selectedTime: string;

  constructor(private router: Router, private datePicker: DatePicker, private datePipe: DatePipe, platform: Platform) { 
    platform.ready().then(() => {
      this.selectedDate = this.datePipe.transform(new Date(),'dd-MM-yyyy');
    });
  }

  
  ngOnInit() {
  }

  selectDate() {
    const options = {
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL
    };

    this.datePicker.show(options).then( (date) => {
      this.selectedDate = this.datePipe.transform(date, 'dd-MM-yyyy');
    });
  }


}
