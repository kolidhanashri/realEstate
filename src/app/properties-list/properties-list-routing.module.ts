import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesListPage } from './properties-list.page';

const routes: Routes = [
  {
    path: '',
    component: PropertiesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesListPageRoutingModule {}
