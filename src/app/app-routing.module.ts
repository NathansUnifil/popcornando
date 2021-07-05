import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'recomendacoes',
    loadChildren: () => import('./recomendacoes/recomendacoes.module').then( m => m.RecomendacoesPageModule)
  },
  {
    path: 'especificacoes',
    loadChildren: () => import('./especificacoes/especificacoes.module').then( m => m.EspecificacoesPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
