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
  id: number = 1;
  mostrarFormulario: boolean = false;
  del: boolean = false;

  constructor(private UsuarioService : UsuarioService ){}

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
}
