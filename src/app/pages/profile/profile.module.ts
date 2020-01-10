import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ActividadComponent } from './../../components/actividad/actividad.component';


@NgModule({
  declarations: [ProfilePage,
    ActividadComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ]
})
export class ProfilePageModule {

}
