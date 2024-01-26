import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  standalone: true,
  imports: [MatFormFieldModule],
  providers: [],
  selector: 'app-cadastro_usuario',
  templateUrl: './cadastro_usuario.component.html',
  styleUrls: ['./cadastro_usuario.component.css']
})
export class Cadastro_usuarioComponent{

}
