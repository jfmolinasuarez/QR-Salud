import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  menuItems =[
    { path: '/', title: 'Inicio'},
    { path: '/informacion', title: 'Información' },
    { path: '/login', title: 'Ingresar' },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
