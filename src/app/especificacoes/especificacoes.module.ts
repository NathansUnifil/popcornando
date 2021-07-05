import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecificacoesPageRoutingModule } from './especificacoes-routing.module';

import { EspecificacoesPage } from './especificacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecificacoesPageRoutingModule
  ],
  declarations: [EspecificacoesPage]
})
export class EspecificacoesPageModule {}
