import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopessoalPageRoutingModule } from './infopessoal-routing.module';

import { InfopessoalPage } from './infopessoal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopessoalPageRoutingModule
  ],
  declarations: [InfopessoalPage]
})
export class InfopessoalPageModule {}
