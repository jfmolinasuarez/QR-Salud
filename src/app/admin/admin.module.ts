import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ParametrosModule } from './parametros/parametros.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    ParametrosModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
