import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterionicPageRoutingModule } from './registerionic-routing.module';

import { RegisterionicPage } from './registerionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterionicPageRoutingModule
  ],
  declarations: [RegisterionicPage]
})
export class RegisterionicPageModule {}
