import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Trabajo} from "../../model/trabajo";
import {switchMap} from "rxjs";
import {TrabajoService} from "../../shared/trabajo.service";
import {Bus} from "../../model/bus";

@Component({
  selector: 'app-trabajo-view',
  templateUrl: './trabajo-view.component.html',
  styleUrls: ['./trabajo-view.component.css']
})
export class TrabajoViewComponent implements OnInit{

  buses: Bus[] | undefined;

  constructor(private route: ActivatedRoute, private trabajoService: TrabajoService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.trabajoService.listarBuses(+params.get('id')!))
    ).subscribe(buses => this.buses = buses);
  }

}
