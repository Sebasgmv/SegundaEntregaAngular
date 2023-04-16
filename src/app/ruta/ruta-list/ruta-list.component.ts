import {Component, OnDestroy, OnInit} from '@angular/core';
import {Bus} from "../../model/bus";
import {BusService} from "../../shared/bus.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Ruta} from "../../model/ruta";
import {RutaService} from "../../shared/ruta.service";

@Component({
  selector: 'app-ruta-list',
  templateUrl: './ruta-list.component.html',
  styleUrls: ['./ruta-list.component.css']
})
export class RutaListComponent implements OnInit, OnDestroy{
  navigationSubscription;

  rutas: Ruta[] | undefined;

  constructor(private rutaService: RutaService,
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
    this.rutaService.findAll().subscribe( rutas => this.rutas = rutas);
  }

  viewRuta(ruta: Ruta): void {
    if (ruta && ruta.id) {
      this.router.navigate(['/ruta/view', ruta.id]);
    }
  }
  editBus(ruta: Ruta): void{
    if (ruta && ruta.id) {
      this.router.navigate(['/ruta/edit', ruta.id]);
    }
  }
  CrearRuta(){
    this.router.navigate(['/ruta/create']);
  }

  deleteRuta(ruta: Ruta): void{
    if (ruta && ruta.id) {
      this.rutaService.eliminarRuta(ruta.id).subscribe({
        next: dato => console.log(dato),
        error: msg => {
          console.error("Hubo un error:");
          console.error(msg);
        }
      });
    }
    this.router.navigate(['/ruta/list']);
  }

}
