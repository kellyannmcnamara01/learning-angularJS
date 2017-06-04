import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
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

