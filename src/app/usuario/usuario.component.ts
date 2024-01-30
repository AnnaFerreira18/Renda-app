import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [ FormsModule,],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  usuario: any = {};
  mostrarFormulario: boolean = false;

  userId: number = 1;

  constructor(private UsuarioService : UsuarioService ){}

  del: boolean = false;

  CadastrarUsuario() {
    const novoUsuario = {
      nome: 'John Doe',
      raca: 'Alguma Raça',
      renda: 50000
    };
       this.mostrarFormulario = true;
       this.UsuarioService.criarUsuario(novoUsuario).subscribe((c)=>{
        console.log(c)
      })
  }
  Buscar() {
    this.UsuarioService.obterUsuarioPorId(this.userId).subscribe(
      (response) => {
        this.usuario = response;
        console.log('Usuário encontrado:', this.usuario);
      },
      (error) => {
        console.error('Erro ao obter usuário por ID:', error);
      }
    );
  }
  Atualizar() {
    // Certifique-se de ter o ID e as informações atualizadas do usuário
    const usuarioAtualizado = {
      // ... propriedades atualizadas do usuário
    };

    this.UsuarioService.atualizarUsuario(this.userId, usuarioAtualizado).subscribe(
      (response) => {
        console.log('Usuário atualizado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao atualizar usuário:', error);
      }
    );
  }

  // Função para deletar um usuário
  Deletar() {
    this.UsuarioService.deletarUsuario(this.userId).subscribe(
      (response) => {
        console.log('Usuário deletado com sucesso:', response);
        // Limpar dados do usuário após a exclusão, se necessário
        this.usuario = {};
      },
      (error) => {
        console.error('Erro ao deletar usuário:', error);
      }
    );
  }
}
