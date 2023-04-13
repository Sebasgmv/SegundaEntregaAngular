import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bus} from "../model/bus";
import {Conductor} from "../model/conductor";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) { }

  findAll(): Observable<Bus[]> {
    return this.http.get<Bus[]>("http://localhost:8080/bus/list");
  }

  recuperarBus(id: number): Observable<Bus> {
    return this.http.get<Bus>(`http://localhost:8080/bus/view/${id}`);
  }

  modificarBus(bus: Bus): Observable<Bus> {
    return this.http.put<Bus>("http://localhost:8080/bus", bus, this.httpOptions);
  }
  editarBus(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>("http://localhost:8080/bus", bus, this.httpOptions);
  }

  eliminarBus(id: number | null | undefined):Observable<any>{
    return this.http.delete(`http://localhost:8080/conductor/delete/${id}`);
  }
}
