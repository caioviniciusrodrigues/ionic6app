import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcacao-ponto',
  templateUrl: './marcacao-ponto.page.html',
  styleUrls: ['./marcacao-ponto.page.scss'],
})
export class MarcacaoPontoPage implements OnInit {

  constructor(private router: Router) { }

  today = Date.now();

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
