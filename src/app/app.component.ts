import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: String;
}

@Component({
  selector: 'app-root',
  template:
  '<h1>{{title}}</h1> \n' +
  '<h2>{{hero.name}} details!</h2> \n' +
  '<div><label>Id: </label>{{hero.id}}</div> \n' +
  '<div><label>Name: </label> \n' +
  '<input [(ngModel)]="hero.name" placeholder = "type in the name">' +
  '</div>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
