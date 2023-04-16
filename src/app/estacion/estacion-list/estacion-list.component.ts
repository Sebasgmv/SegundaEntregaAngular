import {Component, OnDestroy, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {Estacion} from "../../model/estacion";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {EstacionService} from "../../shared/estacion.service";

@Component({
  selector: 'app-estacion-list',
  templateUrl: './estacion-list.component.html',
  styleUrls: ['./estacion-list.component.css']
})
export class EstacionListComponent implements OnInit, OnDestroy{
  navigationSubscription;

  estaciones: Estacion[] | undefined;

  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.ngOnInit()
  }
  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
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
  deleteEstacion(estacion: Estacion): void{
    if (estacion && estacion.id) {
      this.estacionService.eliminarEstacion(estacion.id).subscribe({
        // next: dato => console.log(dato),
        error: msg => {
          console.error("Hubo un error:");
          console.error(msg);
        }
      });
    }
    this.router.navigate(['/estacion/list']);
  }

}
