import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormaPageRoutingModule } from './norma-routing.module';

import { NormaPage } from './norma.page';

// FontAwesome
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // FontAwesomeModule,
    NormaPageRoutingModule
  ],
  declarations: [NormaPage]
})
export class NormaPageModule {}
