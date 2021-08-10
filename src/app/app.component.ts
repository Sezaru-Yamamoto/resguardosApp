import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appAuth = [
    { title: 'Inicio de Sesión', url: '/login/Login', icon: '' },
    { title: 'Registro de Usuario', url: '/signup/Signup', icon: '' }
  ];

  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Crear resguardo', url: '/ticket/Ticket', icon: 'create' }
  ];
  constructor() {}
}
