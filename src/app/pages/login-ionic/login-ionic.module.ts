import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginIonicPageRoutingModule } from './login-ionic-routing.module';

import { LoginIonicPage } from './login-ionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginIonicPageRoutingModule
  ],
  declarations: [LoginIonicPage]
})
export class LoginIonicPageModule {}
