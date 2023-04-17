import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Conductor} from "../model/conductor";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Trabajo} from "../model/trabajo";
import {Bus} from "../model/bus";

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) { }

  findAll(): Observable<Trabajo[]> {
    return this.http.get<Trabajo[]>("http://localhost:8080/trabajo/list");
  }

  listarBuses(id: number): Observable<Bus[]> {
    return this.http.get<Bus[]>(`http://localhost:8080/trabajo/view/${id}`);
  }
}
