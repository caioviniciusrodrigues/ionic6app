import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-ponto',
  templateUrl: './view-ponto.page.html',
  styleUrls: ['./view-ponto.page.scss'],
})
export class ViewPontoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario.codigo');
    localStorage.removeItem('usuario.nome');
    localStorage.removeItem('usuario.login');
    localStorage.removeItem('usuario.logado');
    this.router.navigate(['/']);
  }

}
