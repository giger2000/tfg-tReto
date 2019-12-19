import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormaDataPageRoutingModule } from './norma-data-routing.module';

import { NormaDataPage } from './norma-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormaDataPageRoutingModule
  ],
  declarations: [NormaDataPage]
})
export class NormaDataPageModule {}
