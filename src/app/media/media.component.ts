import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaService } from './media.service';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [MatTableModule, FormsModule, CommonModule],
  providers:[],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {

  listPeople: boolean = false;
  listMedia: boolean = false;
  listaP : any[] = [];
  listaM : any[] = []
  colunaLista: string[] = ['position', 'nome', 'raca', 'renda'];
  colunaMedia: string[] = ['raca', 'Media'];

  constructor(private mediaService : MediaService ){}

  listar(){
    console.log("Lista criada")
    this.mediaService.obterTodosUsuarios().subscribe((p)=>{
      console.log(p)
      if(p){
        this.listaP = p.sort((a: { id: number; } , b: { id: number; }) => a.id - b.id);
        this.listPeople = true;
        this.listMedia = false
      }
    })
  }
  Media(){
    console.log("Media criada")
    this.mediaService.calcularMediaRenda().subscribe((m)=>{
      console.log(m)
      if(m){
        this.listaM = m;
        this.listMedia = true;
        this.listPeople = false;
      }
    })
  }
}

