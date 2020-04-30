import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroUsuarioPageRoutingModule } from './cadastro-usuario-routing.module';

import { CadastroUsuarioPage } from './cadastro-usuario.page';
import { FormDebugComponent } from '../form-debug/form-debug.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroUsuarioPageRoutingModule
  ],
  declarations: [CadastroUsuarioPage, FormDebugComponent]
})
export class CadastroUsuarioPageModule {}
