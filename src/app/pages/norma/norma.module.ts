import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormaPageRoutingModule } from './norma-routing.module';

import { NormaPage } from './norma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormaPageRoutingModule
  ],
  declarations: [NormaPage]
})
export class NormaPageModule {}
