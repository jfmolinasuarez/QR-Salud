import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ParametrosModule } from './parametros/parametros.module';



@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    ParametrosModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
