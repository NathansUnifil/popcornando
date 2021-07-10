import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivroPageRoutingModule } from './livro-routing.module';

import { LivroPage } from './livro.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    LivroPageRoutingModule
  ],
  declarations: [LivroPage]
})
export class LivroPageModule {}
