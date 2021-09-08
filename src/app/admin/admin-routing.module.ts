import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path:'', component: AdminComponent},
  {
    path: 'parametros',
    loadChildren: () =>
      import('./parametros/parametros-routing.module').then(
        (m) => m.ParametrosRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
