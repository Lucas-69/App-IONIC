import { Component, OnInit } from '@angular/core';

interface Componentes {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'logo-apple',
      name: 'Alert',
      redirecTo: '/alert'
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
