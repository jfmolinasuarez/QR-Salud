import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuPrincipal= [
    {
      title: 'Parametros',
      marker: 'parametros',
      menuItems : [
        { path: '/admin/parametros/medicos', title: 'Medicos',  icon: 'medication' },
        { path: '/admin/parametros/pacientes', title: 'Pacientes',  icon:'sick' },
        { path: '/admin/parametros/especialidades', title: 'Especialidades',  icon:'hail' },
        { path: '/admin/parametros/centros-medicos', title: 'Centros Medicos',  icon: 'business_center' },
        { path: '/admin/parametros/categorias-diagnosticos', title: 'Categorias Diagnosticos',  icon:'category' },
        { path: '/admin/parametros/convenios-administrativos', title: 'Convenios Administrativos',  icon:'content_paste_go' },
      ]  
    },
    {
      title: 'Control Citas',
      marker: 'control',
      menuItems : [
        { path: '/admin/parametros/medicos', title: 'Medicos',  icon: 'medication' },
        { path: '/admin/parametros/pacientes', title: 'Pacientes',  icon:'sick' },
        { path: '/admin/parametros/especialidades', title: 'Especialidades',  icon:'hail' },
        { path: '/admin/parametros/centros-medicos', title: 'Centros Medicos',  icon: 'business_center' },
        { path: '/admin/parametros/categorias-diagnosticos', title: 'Categorias Diagnosticos',  icon:'category' },
        { path: '/admin/parametros/convenios-administrativos', title: 'Convenios Administrativos',  icon:'content_paste_go' },
      ]  
    },

  ]


  constructor() { }

  ngOnInit(): void {
    
  }

}
