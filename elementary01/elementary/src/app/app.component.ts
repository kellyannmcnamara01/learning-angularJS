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
        `,
})


export class AppComponent  {
  title = 'Kelly';
  //hero = "Windstorm";
  //make an object of hero
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
  };
}

