import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPontoPage } from './view-ponto.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPontoPageRoutingModule {}
