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
  confirmandoDelecao: boolean = false;
  usuarioParaDeletar: any;
  usuariosFiltrados: any[] = [];
  termoPesquisa: string = '';

  racas: string[] = ['Branca', 'Parda', 'Negra', 'Indígena', 'Amarela'];

  constructor(private router: Router, private UsuarioService : UsuarioService ){this.ListarTodos();}


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

  criar() {
    this.router.navigate(['/usuario-cadastro']);
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
      if (usuarios) {
        this.lista = usuarios.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
        this.aplicarFiltro();
      }
    });
  }

  pesquisar() {
    this.aplicarFiltro(); // Aplica o filtro com base no texto de pesquisa
  }

  aplicarFiltro() {
    this.usuariosFiltrados = this.lista.filter(usuario =>
      usuario.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase())
    );
  }

}
