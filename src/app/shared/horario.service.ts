import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ruta} from "../model/ruta";
import {Bus} from "../model/bus";
import {Horario} from "../model/horario";

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) { }

  findAll(): Observable<Horario[]> {
    return this.http.get<Horario[]>("http://localhost:8080/horario/list");
  }

  recuperarHorario(id: number): Observable<Horario> {
    return this.http.get<Horario>(`http://localhost:8080/horario/view/${id}`);
  }

  crearHorario(horario: Horario): Observable<Horario> {
    return this.http.put<Horario>("http://localhost:8080/horario", horario, this.httpOptions);
  }
  editarHorario(horario: Horario): Observable<Horario> {
    return this.http.post<Horario>("http://localhost:8080/horario", horario, this.httpOptions);
  }

  eliminarHorario(id: number | null | undefined):Observable<any>{
    return this.http.delete(`http://localhost:8080/horario/delete/${id}`);
  }
}
