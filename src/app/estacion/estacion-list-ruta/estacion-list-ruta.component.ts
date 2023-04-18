import {Component, OnInit} from '@angular/core';
import {Bus} from "../../model/bus";
import {ActivatedRoute} from "@angular/router";
import {TrabajoService} from "../../shared/trabajo.service";
import {switchMap} from "rxjs";
import {Estacion} from "../../model/estacion";
import {EstacionService} from "../../shared/estacion.service";

@Component({
  selector: 'app-estacion-list-ruta',
  templateUrl: './estacion-list-ruta.component.html',
  styleUrls: ['./estacion-list-ruta.component.css']
})
export class EstacionListRutaComponent implements OnInit{
  estaciones: Estacion[] | undefined;

  constructor(private route: ActivatedRoute, private estacionService: EstacionService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.estacionService.listarEstaciones(+params.get('id')!))
    ).subscribe(buses => this.estaciones = buses);
  }
}
