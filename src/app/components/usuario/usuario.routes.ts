import { Routes, RouterModule } from '@angular/router';

import { UsuariodetalleComponent } from './usuariodetalle.component';
import { UsuarioeditarComponent } from './usuarioeditar.component';
import { UsuarionuevoComponent } from './usuarionuevo.component';


export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: UsuarionuevoComponent},
    { path: 'editar', component: UsuarioeditarComponent},
    { path: 'detalle', component: UsuariodetalleComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo'}
];

