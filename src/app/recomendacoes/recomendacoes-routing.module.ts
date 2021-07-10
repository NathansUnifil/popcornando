import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendacoesPage } from './recomendacoes.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendacoesPage
  },
  {
    path: 'livro',
    loadChildren: () => import('./livro/livro.module').then( m => m.LivroPageModule)
  },
  {
    path: 'negocio',
    loadChildren: () => import('./negocio/negocio.module').then( m => m.NegocioPageModule)
  },
  {
    path: 'brinquedo',
    loadChildren: () => import('./brinquedo/brinquedo.module').then( m => m.BrinquedoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendacoesPageRoutingModule {}
