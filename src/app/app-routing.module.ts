import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { InformacionComponent } from './client/informacion/informacion.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'informacion', component: InformacionComponent },
    ],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-routing.module').then(
        (m) => m.AdminRoutingModule
      ),
  
  },

  
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
