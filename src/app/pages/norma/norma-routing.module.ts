import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormaPage } from './norma.page';

const routes: Routes = [
  {
    path: '',
    component: NormaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormaPageRoutingModule {}
