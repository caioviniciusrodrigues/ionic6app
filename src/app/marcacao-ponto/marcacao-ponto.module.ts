import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcacaoPontoPageRoutingModule } from './marcacao-ponto-routing.module';

import { MarcacaoPontoPage } from './marcacao-ponto.page';
import { SharedModule } from '../shared-components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcacaoPontoPageRoutingModule,
    SharedModule
  ],
  declarations: [MarcacaoPontoPage]
})
export class MarcacaoPontoPageModule {}
