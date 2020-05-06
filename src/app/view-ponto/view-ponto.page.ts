import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-ponto',
  templateUrl: './view-ponto.page.html',
  styleUrls: ['./view-ponto.page.scss'],
})
export class ViewPontoPage implements OnInit {

  periodoData: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mudarDate(event) {
    console.log('ionChange', event.details);
  }

}
