import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-ponto',
  templateUrl: './view-ponto.page.html',
  styleUrls: ['./view-ponto.page.scss'],
})
export class ViewPontoPage implements OnInit {

  dataInicio;
  dataFim;

  dataInvalida: boolean = false;

  marcacoes = [
    { nome: "caio 1", data: "2020/05/20" },
    { nome: "caio 2", data: "2020/05/14" },
    { nome: "caio 3", data: "2020/05/14" },
    { nome: "caio 4", data: "2020/05/13" },
    { nome: "caio 5", data: "2020/05/12" },
    { nome: "caio 6", data: "2020/05/11" },
    { nome: "caio 7", data: "2020/05/10" }
  ];


  filtrado = [...this.marcacoes];

  load() {
    if(!this.dataInicio || !this.dataFim) {
      console.log('Data nao informada');
      return;
    }

    const dataInicio = new Date(this.dataInicio);
    const dataFim = new Date(this.dataFim);

    this.filtrado = this.marcacoes.filter( item => {
      return isWithinInterval(new Date(item.data), dataInicio)
    });

  }

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
