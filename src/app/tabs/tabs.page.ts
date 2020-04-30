import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  logado = localStorage.getItem('usuario.logado');

  constructor(private router: Router) { 
    (this.logado) == 'sim' ? '' : this.router.navigate(['/']);
  }

}
