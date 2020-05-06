import { Component, OnInit, Input } from '@angular/core';

import { Util } from '../../utils/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {

  @Input() title;

  logout: Util = new Util();

  constructor(private router: Router) { }

  ngOnInit() {}

  sair() {
    this.logout.logout();
    this.router.navigate(['/']);
  }

}
