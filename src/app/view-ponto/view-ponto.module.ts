import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPontoPageRoutingModule } from './view-ponto-routing.module';

import { ViewPontoPage } from './view-ponto.page';
import { SharedModule } from '../shared-components/shared.module';

import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPontoPageRoutingModule,
    SharedModule,
    Ionic4DatepickerModule
  ],
  declarations: [ViewPontoPage]
})
export class ViewPontoPageModule {}
