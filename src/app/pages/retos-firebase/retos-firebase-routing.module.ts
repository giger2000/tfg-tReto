import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetosFirebasePage } from './retos-firebase.page';

const routes: Routes = [
  {
    path: '',
    component: RetosFirebasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetosFirebasePageRoutingModule {}
