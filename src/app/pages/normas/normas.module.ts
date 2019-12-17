import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormasPageRoutingModule } from './normas-routing.module';

import { NormasPage } from './normas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormasPageRoutingModule
  ],
  declarations: [NormasPage]
})
export class NormasPageModule {}
