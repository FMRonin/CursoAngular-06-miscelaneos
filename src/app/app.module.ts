import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';

import { APP_ROUTING } from './app.routes';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarionuevoComponent } from './components/usuario/usuarionuevo.component';
import { UsuarioeditarComponent } from './components/usuario/usuarioeditar.component';
import { UsuariodetalleComponent } from './components/usuario/usuariodetalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarionuevoComponent,
    UsuarioeditarComponent,
    UsuariodetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
