import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  usuario: any = {};
  lista : any[] = [];
  id: number = 1;
  mostrarFormulario: boolean = true;
  del: boolean = false;

  racas: string[] = ['Branca', 'Parda', 'Negra', 'Indígena', 'Amarela'];

  constructor(private UsuarioService : UsuarioService ){this.ListarTodos();}

  CadastrarUsuario() {

       this.UsuarioService.criarUsuario(this.usuario).subscribe((usuario)=>{
        console.log(usuario)
        this.mostrarFormulario = true;
      })
  }
  Buscar() {
    this.UsuarioService.obterUsuarioPorId(this.id).subscribe((usuarioid)=>{
      console.log(usuarioid);
      this.usuario = usuarioid;
    })
  }

  Atualizar() {
    const usuarioAtualizado = {
      nome: this.usuario.nome,
      raca: this.usuario.raca,
      renda: this.usuario.renda
    };

      this.UsuarioService.atualizarUsuario(this.id, usuarioAtualizado).subscribe(
        (a)=>{
          console.log("executado",a);
        })
  }
  Deletar() {
    this.UsuarioService.deletarUsuario(this.id).subscribe(()=>{
      console.log("executado")
    })
  }

  ListarTodos() {
    this.UsuarioService.obterUsuarios().subscribe((usuarios) => {
      console.log(usuarios);
      if (usuarios) {
        // Ordena a lista por ID antes de exibir na tabela
        this.lista = usuarios.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
      }
    });
  }
}
