import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuarionuevo',
  template: `
    <p>
      usuarionuevo works!
    </p>
  `,
  styles: []
})
export class UsuarionuevoComponent implements OnInit {

  constructor( private router:ActivatedRoute) { 
    this.router.parent.params.subscribe(paarametro => {
      console.log("Ruta Hija de usuario nuevo >>>>");
      console.log(paarametro);
    })
  }

  ngOnInit() {
  }

}
