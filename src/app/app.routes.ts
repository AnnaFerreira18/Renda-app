
import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { MediaComponent } from './media/media.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component'; 

export const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'media', component: MediaComponent },
  { path: 'usuario-editar/:id', component: UsuarioEditarComponent },
];
