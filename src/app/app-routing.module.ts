import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './client/auth/login/login.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { InformacionComponent } from './client/informacion/informacion.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent, data:{ title:'AsistenMed' } },
      { path: 'login', component: LoginComponent, data:{ title:'Información' }},
      { path: 'informacion', component: InformacionComponent, data:{title:'Inicio De Sesión'}},
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-routing.module').then(
        (m) => m.AdminRoutingModule
      ),
  },

  { path: '**', component: PageNotFoundComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
