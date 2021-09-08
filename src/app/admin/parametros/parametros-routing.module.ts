import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesMedicasComponent } from './especialidades-medicas/especialidades-medicas.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [
  {path:'pacientes', component: PacientesComponent},
  {path:'medicos', component: MedicosComponent},
  {path:'especialidades', component: EspecialidadesMedicasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
