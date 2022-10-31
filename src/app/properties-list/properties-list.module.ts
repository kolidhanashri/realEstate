import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertiesListPageRoutingModule } from './properties-list-routing.module';

import { PropertiesListPage } from './properties-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PropertiesListPageRoutingModule
  ],
  declarations: [PropertiesListPage]
})
export class PropertiesListPageModule {}
