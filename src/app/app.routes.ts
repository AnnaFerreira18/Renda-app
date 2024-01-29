
import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { MediaComponent } from './media/media.component';

export const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'media', component: MediaComponent },

];
