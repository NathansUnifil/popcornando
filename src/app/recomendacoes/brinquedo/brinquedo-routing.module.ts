import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrinquedoPage } from './brinquedo.page';

const routes: Routes = [
  {
    path: '',
    component: BrinquedoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrinquedoPageRoutingModule {}
