import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><p>Id: {{hero.id}}</p></div>
        <div><p>Name: {{hero.name}}</p></div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
        <div>
            <ul class="heroes">
              <li *ngFor="let hero of heroes">
                <span>{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
        </div>
        `,
  styles: [`
      h1 {
        background: green;
      }
  `]
})


export class AppComponent  {
  title = 'Kelly';
  //hero = "Windstorm";
  //make an object of hero
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
  };
  heroes = HEROES;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

