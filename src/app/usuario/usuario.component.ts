import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyMaskModule } from "ng2-currency-mask";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [ FormsModule, CommonModule, CurrencyMaskModule ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  usuario: any = {};
  lista : any[] = [];
  id: number = 1;
  mostrarFormulario: boolean = true;
  del: boolean = false;
  confirmandoDelecao: boolean = false;
  usuarioParaDeletar: any;

  racas: string[] = ['Branca', 'Parda', 'Negra', 'Indígena', 'Amarela'];

  constructor(private router: Router, private UsuarioService : UsuarioService ){this.ListarTodos();}

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
  editarUsuario(usuario: any) {
    this.router.navigate([`/usuario-editar/${usuario.id}`]);
  }


   Deletar() {
   this.UsuarioService.deletarUsuario(this.id).subscribe(()=>{
       console.log("executado")
     })
   }

  // confirmarDeletarUsuario(usuario: any) {
  //   this.usuarioParaDeletar = usuario;
  //   this.confirmandoDelecao = true;
  // }

  // cancelarDelecao() {
  //   this.confirmandoDelecao = false;
  // }

  deletarUsuario(usuario: any) {
    this.UsuarioService.deletarUsuario(usuario.id).subscribe(() => {
      console.log("Usuário deletado com sucesso");
    });
  }

  ListarTodos() {
    this.UsuarioService.obterUsuarios().subscribe((usuarios) => {
      console.log(usuarios);
      if (usuarios) {
        this.lista = usuarios.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
      }
    });
  }
}
