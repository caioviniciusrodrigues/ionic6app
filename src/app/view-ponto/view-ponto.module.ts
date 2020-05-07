import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPontoPageRoutingModule } from './view-ponto-routing.module';

import { ViewPontoPage } from './view-ponto.page';
import { SharedModule } from '../shared-components/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPontoPageRoutingModule,
    SharedModule
  ],
  declarations: [ViewPontoPage]
})
export class ViewPontoPageModule {}
