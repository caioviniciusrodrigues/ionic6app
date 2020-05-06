import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  declarations: [FormDebugComponent, RodapeComponent, CabecalhoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FormDebugComponent, RodapeComponent, CabecalhoComponent
  ]
})
export class SharedModule { }
