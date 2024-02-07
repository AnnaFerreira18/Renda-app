import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsuarioComponent } from './usuario/usuario.component';
import { MediaComponent } from "./media/media.component";
import { Router } from '@angular/router';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MediaService } from './media/media.service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MatToolbarModule, MediaComponent, UsuarioComponent, CurrencyMaskModule],
})
export class AppComponent {
  title = 'renda-app';

  constructor(private router: Router, private MediaService: MediaService ) {}

  componentLista: string = '';

  irParaUsuario() {
    console.log('Navegando para Usuário');
    this.router.navigate(['/usuario']);
  }

  irParaMedia() {
    this.router.navigate(['/media']);

}
}

