import { Component } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";




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
    private usuarioService: UsuarioService
  ) {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // O sinal de + converte a string para número
      this.carregarUsuario();
    });
  }

  carregarUsuario() {
    // Carregar informações do usuário com base no ID
    this.usuarioService.obterUsuarioPorId(this.id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  atualizarUsuario() {
    // Lógica para atualizar o usuário usando o serviço
    this.usuarioService.atualizarUsuario(this.id, this.usuario).subscribe(() => {
      console.log('Usuário atualizado com sucesso');
      // Redirecionar de volta para a página de detalhes do usuário ou para onde for necessário
      this.router.navigate(['/usuario', this.id]);
    });
  }

  salvarEdicao() {
    this.usuarioService.atualizarUsuario(this.id, this.usuario).subscribe(() => {
      console.log('Usuário atualizado com sucesso');
      this.router.navigate(['/usuario', this.id]);
    });
  }
}
