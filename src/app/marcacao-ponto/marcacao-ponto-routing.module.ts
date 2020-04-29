import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcacaoPontoPage } from './marcacao-ponto.page';

const routes: Routes = [
  {
    path: '',
    component: MarcacaoPontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcacaoPontoPageRoutingModule {}
