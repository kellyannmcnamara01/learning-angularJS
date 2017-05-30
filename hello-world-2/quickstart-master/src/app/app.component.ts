import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
})
export class AppComponent  {
  title = 'Hello World';
  //hero = 'Windstorm';
}

//creating a hero class with two properties
export class Hero {
  id: number;
  name: string;
}

//refactor the compponent's hero to be the type Hero
hero : Hero = {
  id: 1,
  name: 'Windstorm'
}
