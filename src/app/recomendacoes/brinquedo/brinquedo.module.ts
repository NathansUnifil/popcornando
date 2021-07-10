import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrinquedoPageRoutingModule } from './brinquedo-routing.module';

import { BrinquedoPage } from './brinquedo.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    BrinquedoPageRoutingModule
  ],
  declarations: [BrinquedoPage]
})
export class BrinquedoPageModule {}
