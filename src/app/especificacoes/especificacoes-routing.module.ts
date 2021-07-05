import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecificacoesPage } from './especificacoes.page';

const routes: Routes = [
  {
    path: '',
    component: EspecificacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecificacoesPageRoutingModule {}
