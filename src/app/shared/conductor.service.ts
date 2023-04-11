import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Conductor} from "../model/conductor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  // http://localhost:8080/conductor/view/1

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) { }

  findAll(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>("http://localhost:8080/conductor/list");
  }
  recuperarConductor(id: number): Observable<Conductor> {
    return this.http.get<Conductor>(`http://localhost:8080/conductor/view/${id}`);
  }

  save(conductor: Conductor): Observable<Conductor> {
    return this.http.post<Conductor>(`http://localhost:8080/conductor`, conductor, this.httpOptions);
  }
}
