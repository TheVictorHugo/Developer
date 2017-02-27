import { Component } from '@angular/core';

@Component({
  selector: 'meu-primeiro-component',
  template: `
    <p> {{ nomePortal }}</p>
    <ul>
      <li *ngFor="let curso of cursos">
      {{ curso }}
      </li>
    </ul>*
  `
})
export class MeuPrimeiroComponent {


  nomePortal = 'loiane.traning';
  cursos = ['Angular 2', 'Java', 'Ext JS'];

}
