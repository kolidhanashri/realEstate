import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateServiceRequestPage } from './create-service-request.page';

const routes: Routes = [
  {
    path: '',
    component: CreateServiceRequestPage
  },
  {
    path: ':id',
    component: CreateServiceRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateServiceRequestPageRoutingModule {}
