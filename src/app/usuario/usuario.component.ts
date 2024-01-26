import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  constructor(private UsuarioService : UsuarioService ){}

  del: boolean = false;

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
