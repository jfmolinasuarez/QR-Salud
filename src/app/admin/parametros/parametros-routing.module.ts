import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasDiagnosticosComponent } from './categorias-diagnosticos/categorias-diagnosticos.component';
import { CentrosMedicosComponent } from './centros-medicos/centros-medicos.component';
import { ConveniosAdministrativosComponent } from './convenios-administrativos/convenios-administrativos.component';
import { EspecialidadesMedicasComponent } from './especialidades-medicas/especialidades-medicas.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [
  {path:'pacientes', component: PacientesComponent, data:{ title:'Pacientes' }},
  {path:'medicos', component: MedicosComponent, data:{ title:'Medicos' }},
  {path:'especialidades', component: EspecialidadesMedicasComponent, data:{ title:'Especialidades' }},
  {path:'centros-medicos', component: CentrosMedicosComponent, data:{ title:'Centros Medicos' }},
  {path:'categorias-diagnosticos', component: CategoriasDiagnosticosComponent, data:{ title:'Categorias Diagnosticos' }},
  {path:'convenios-administrativos', component: ConveniosAdministrativosComponent, data:{ title:'Convenios Administrativos' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
