import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size' : tamano + 'px' }">
      Hola mundo. Esto es una etiqueta
    </p>
    <p [style.fontSize.px]="tamano">
      Hola mundo. Esto es una etiqqueta
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {


  tamano:number = 40;

  constructor() { }

  ngOnInit() {
  }

}
