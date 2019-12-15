import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetosFirebasePageRoutingModule } from './retos-firebase-routing.module';

import { RetosFirebasePage } from './retos-firebase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetosFirebasePageRoutingModule
  ],
  declarations: [RetosFirebasePage]
})
export class RetosFirebasePageModule {}
