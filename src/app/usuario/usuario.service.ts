import { Injectable } from '@angular/core';
import { environment } from '../../env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.API_URL}`

constructor(private http: HttpClient) { }
criarUsuario(usuario: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/Cidadaos/NovoUsuario`, usuario);
}

obterUsuarioPorId(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/Cidadaos/Busca por ID?id=${id}`);
}

atualizarUsuario(id: number, usuario: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/Cidadaos/Update?id=${id}`, usuario);
}
}
