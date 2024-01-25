import { Injectable } from '@angular/core';
import { environment } from '../../env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = `${environment.API_URL}`

constructor(private http: HttpClient) { }

obterTodosUsuarios(): Observable<any> {
  return this.http.get(`${this.apiUrl}/Media/listar`);
}

calcularMediaRenda(): Observable<any> {
  return this.http.get(`${this.apiUrl}/Media/calcularMedia`);
}
}
