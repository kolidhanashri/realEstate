import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateServiceRequestPageRoutingModule } from './create-service-request-routing.module';

import { CreateServiceRequestPage } from './create-service-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateServiceRequestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateServiceRequestPage]
})
export class CreateServiceRequestPageModule {}
