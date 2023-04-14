import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Bus} from "../../model/bus";
import {BusService} from "../../shared/bus.service";

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit{

  buses: Bus[] | undefined;

  constructor(private busService: BusService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    this.busService.findAll().subscribe( buses => this.buses = buses);
  }

  viewBus(bus: Bus): void {
    if (bus && bus.id) {
      this.router.navigate(['/bus/view', bus.id]);
    }
  }
  editBus(bus: Bus): void{
    if (bus && bus.id) {
      this.router.navigate(['/bus/edit', bus.id]);
    }
  }
  CrearBus(){
    this.router.navigate(['/bus/create']);
  }

  deleteBus(bus: Bus): void{
    if (bus && bus.id) {
      this.busService.eliminarBus(bus.id).subscribe({
        next: dato => console.log(dato),
        error: msg => {
          console.error("Hubo un error:");
          console.error(msg);
        }
      });
    }
    this.router.navigate(['/bus/list']);
  }

}
