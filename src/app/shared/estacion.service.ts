import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Estacion} from "../model/estacion";
import {Conductor} from "../model/conductor";

@Injectable({
  providedIn: 'root'
})
export class EstacionService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) { }

  findAll(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>("http://localhost:8080/estacion/list");
  }
  recuperarEstacion(id: number): Observable<Estacion> {
    return this.http.get<Estacion>(`http://localhost:8080/estacion/view/${id}`);
  }

  crearEstacion(estacion: Estacion): Observable<Conductor> {
    return this.http.post<Estacion>("http://localhost:8080/estacion", estacion, this.httpOptions);
  }

  modificarEstacion(estacion: Estacion): Observable<Estacion> {
    return this.http.put<Estacion>("http://localhost:8080/estacion", estacion, this.httpOptions);
  }

  eliminarEstacion(id: number | null | undefined):Observable<any>{
    return this.http.delete(`http://localhost:8080/estacion/delete/${id}`);
    // return this.http.delete<Conductor>('http://localhost:8080/conductor', conductor, this.httpOptions);
  }
}
