import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bus} from "../model/bus";
import {Ruta} from "../model/ruta";

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) { }

  findAll(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>("http://localhost:8080/ruta/list");
  }

  recuperarRuta(id: number): Observable<Ruta> {
    return this.http.get<Ruta>(`http://localhost:8080/ruta/view/${id}`);
  }

  crearRuta(ruta: Ruta): Observable<Ruta> {
    return this.http.put<Bus>("http://localhost:8080/ruta", ruta, this.httpOptions);
  }
  editarRuta(ruta: Ruta): Observable<Ruta> {
    return this.http.post<Bus>("http://localhost:8080/ruta", ruta, this.httpOptions);
  }

  eliminarRuta(id: number | null | undefined):Observable<any>{
    return this.http.delete(`http://localhost:8080/ruta/delete/${id}`);
  }
}
