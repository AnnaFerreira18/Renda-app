import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsuarioComponent } from './usuario/usuario.component';
import { MediaComponent } from "./media/media.component";
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MatToolbarModule, MediaComponent, UsuarioComponent]
})
export class AppComponent {
  title = 'renda-app';

  constructor(private router: Router) {}

  componentLista: string = '';

  irParaUsuario() {
    this.router.navigate(['/usuario']);
  }

  irParaMedia() {
    this.componentLista = 'media';
  }
}
