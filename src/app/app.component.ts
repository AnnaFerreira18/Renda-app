import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsuarioComponent } from './usuario/usuario.component';
import { MediaComponent } from "./media/media.component";
import { Cadastro_usuarioComponent } from './cadastro_usuario/cadastro_usuario.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MatToolbarModule, MediaComponent, UsuarioComponent]
})
export class AppComponent {
  title = 'renda-app';

  currentComponent: string = '';

  MediaComponent() {
    this.currentComponent = 'media';
  }

  UsuarioComponent() {
    this.currentComponent = 'usuario';
  }

}
