import { Component } from '@angular/core';
import { MediaService } from './media.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [MatTableModule],
  providers:[],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {

  listPeople: boolean = false;
  listMedia: boolean = false;
  del: boolean = false;
  listaP : any[] = [];
  displayedColumns: string[] = ['position', 'nome', 'raca', 'renda'];

  constructor(private mediaService : MediaService ){}

  listar(){
    console.log("Lista criada")
    this.mediaService.obterTodosUsuarios().subscribe((p)=>{
      console.log(p)
      if(p){
        this.listaP = p.sort((a: { id: number; } , b: { id: number; }) => a.id - b.id);
        this.listPeople = true;

      }
    })
  }
  Media(){
    console.log("Media criada")
    this.mediaService.calcularMediaRenda().subscribe((p)=>{
      console.log(p)
    })
  }
  Deletar(){
    console.log("Delete criado")
  }
}
