import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormaDataPage } from './norma-data.page';

const routes: Routes = [
  {
    path: '',
    component: NormaDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormaDataPageRoutingModule {}
