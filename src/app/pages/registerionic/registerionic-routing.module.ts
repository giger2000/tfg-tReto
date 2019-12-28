import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterionicPage } from './registerionic.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterionicPageRoutingModule {}
