import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h3>
  {{title}}
  <br>
  <hr>
  <input [(ngModel)]="hero.name" placeholder="name">
  <br>
  <label>sau khi binding:
  </label>
  <br>
  {{hero.name}}
  </h3>
  `

})
export class AppComponent {
  title = 'Two-way binding with ngModel';
  hero: Hero = {
    id: 1,
    name: 'danger'
  }
}

export class Hero {
  id: number;
  name: string;
}

