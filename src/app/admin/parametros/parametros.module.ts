import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ServiciosMedicosComponent } from './servicios-medicos/servicios-medicos.component';
import { EspecialidadesMedicasComponent } from './especialidades-medicas/especialidades-medicas.component';
import { TiposConsultasComponent } from './tipos-consultas/tipos-consultas.component';
import { ConveniosAdministrativosComponent } from './convenios-administrativos/convenios-administrativos.component';
import { TiposDocumentosComponent } from './tipos-documentos/tipos-documentos.component';
import { DiagnosticosComponent } from './diagnosticos/diagnosticos.component';
import { CategoriasDiagnosticosComponent } from './categorias-diagnosticos/categorias-diagnosticos.component';
import { AdmisionesComponent } from './admisiones/admisiones.component';
import { CentrosMedicosComponent } from './centros-medicos/centros-medicos.component';
import { CentrosMedicosParametrosComponent } from './centros-medicos-parametros/centros-medicos-parametros.component';
import { ViasIngresosComponent } from './vias-ingresos/vias-ingresos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PacientesComponent,
    MedicosComponent,
    ServiciosMedicosComponent,
    EspecialidadesMedicasComponent,
    TiposConsultasComponent,
    ConveniosAdministrativosComponent,
    TiposDocumentosComponent,
    DiagnosticosComponent,
    CategoriasDiagnosticosComponent,
    AdmisionesComponent,
    CentrosMedicosComponent,
    CentrosMedicosParametrosComponent,
    ViasIngresosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
