import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  label;

  i = 1;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeLabel() {
    this.label = 'MUDOU LABEL ' + this.i++;
  }



}
