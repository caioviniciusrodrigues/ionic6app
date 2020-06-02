import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPontoPageRoutingModule } from './view-ponto-routing.module';

import { ViewPontoPage } from './view-ponto.page';
import { SharedModule } from '../shared-components/shared.module';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPontoPageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ],
  declarations: [ViewPontoPage]
})
export class ViewPontoPageModule {}
