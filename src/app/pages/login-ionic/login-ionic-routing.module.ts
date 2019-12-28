import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginIonicPage } from './login-ionic.page';

const routes: Routes = [
  {
    path: '',
    component: LoginIonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginIonicPageRoutingModule {}
