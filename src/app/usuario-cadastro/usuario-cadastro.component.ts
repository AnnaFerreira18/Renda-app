import { Component } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";

@Component({
  selector: 'app-usuario-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyMaskModule],
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent{

  constructor(private router: Router, private UsuarioService : UsuarioService, private location: Location ) {}

  usuario: any = {};
  lista : any[] = [];
  id: number = 1;
  mostrarFormulario: boolean = true;

  racas: string[] = ['Branca', 'Parda', 'Negra', 'Indígena', 'Amarela'];

  
  CadastrarUsuario() {
    console.log("CadastrarUsuario() chamado");
    this.UsuarioService.criarUsuario(this.usuario).subscribe((usuario) => {
      console.log(usuario);
      this.mostrarFormulario = true;
    });
  }
voltar(): void {
  this.location.back();
}

}
