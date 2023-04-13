import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {Estacion} from "../../model/estacion";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EstacionService} from "../../shared/estacion.service";

@Component({
  selector: 'app-estacion-list',
  templateUrl: './estacion-list.component.html',
  styleUrls: ['./estacion-list.component.css']
})
export class EstacionListComponent implements OnInit{

  estaciones: Estacion[] | undefined;

  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.estacionService.findAll().subscribe( estaciones => this.estaciones = estaciones);
  }

  CrearEstacion(){
    this.router.navigate(['/estacion/create']);
  }

  viewEstacion(estacion: Estacion): void{
    if (estacion && estacion.id) {
      this.router.navigate(['/estacion/view', estacion.id]);
    }
  }
  editEstacion(estacion: Estacion): void{
    if (estacion && estacion.id) {
      this.router.navigate(['/estacion/edit', estacion.id]);
    }
  }

  deleteestacion(estacion: Estacion): void{
    if (estacion && estacion.id) {
      this.estacionService.eliminarEstacion(estacion.id).subscribe({
        // next: dato => console.log(dato),
        error: msg => {
          console.error("Hubo un error:");
          console.error(msg);
        }
      });
    }
  }

}
