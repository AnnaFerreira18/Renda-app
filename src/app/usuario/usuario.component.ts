import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  del: boolean = false;

  Cadastrar(){
    console.log("Cadastro criado")
  }
  Buscar(){
    console.log("Busca criada")
  }
  Atualizar(){
    console.log("Atualizar criado")
  }
  Deletar(){
    console.log("Delete criado para Id:")
  }
}
