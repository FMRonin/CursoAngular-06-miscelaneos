import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <hr>
  <app-ng-style></app-ng-style>
  <hr>
  <app-ng-class></app-ng-class>
  <h1 [appResaltado]="'orange'">Hola Mundo</h1>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
