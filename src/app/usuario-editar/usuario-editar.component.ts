import { Component } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyMaskModule],
  templateUrl: './usuario-editar.component.html',
  styleUrl: './usuario-editar.component.scss'
})
export class UsuarioEditarComponent {
  usuario: any = {};
  id: number =0;
  racas: string[] = ['Branca', 'Parda', 'Negra', 'Indígena', 'Amarela'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // O sinal de + converte a string para número
      this.carregarUsuario();
    });
  }

  carregarUsuario() {
    this.usuarioService.obterUsuarioPorId(this.id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  salvarEdicao() {
    this.usuarioService.atualizarUsuario(this.id, this.usuario).subscribe(() => {
      console.log('Usuário atualizado com sucesso');
      this.router.navigate(['/usuario', this.id]);
    });
  }

  voltar(): void {
    this.location.back();
  }
}
