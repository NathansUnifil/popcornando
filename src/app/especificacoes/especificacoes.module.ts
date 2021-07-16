import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecificacoesPageRoutingModule } from './especificacoes-routing.module';

import { EspecificacoesPage } from './especificacoes.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    EspecificacoesPageRoutingModule
    ],
  declarations: [EspecificacoesPage]
})
export class EspecificacoesPageModule {}
