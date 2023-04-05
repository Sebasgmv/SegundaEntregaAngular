import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Conductor} from "../model/conductor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  // http://localhost:8080/conductor/view/1
  constructor(private http: HttpClient) { }

  listarPersonas(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>("http://localhost:8080/conductor/list");
  }
  recuperarConductor(id: number): Observable<Conductor> {
    return this.http.get<Conductor>(`http://localhost:8080/conductor/view/${id}`);
  }
}
