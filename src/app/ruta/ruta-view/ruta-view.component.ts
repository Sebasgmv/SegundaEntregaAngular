import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {Ruta} from "../../model/ruta";
import {RutaService} from "../../shared/ruta.service";

@Component({
  selector: 'app-ruta-view',
  templateUrl: './ruta-view.component.html',
  styleUrls: ['./ruta-view.component.css']
})
export class RutaViewComponent implements OnInit{
  ruta: Ruta = new Ruta()

  constructor(private rutaService: RutaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params =>
        this.rutaService.recuperarRuta(+params.get('id')!)
    )).subscribe(ruta => this.ruta = ruta);
  }

  navigateToList() {
    this.router.navigate(['/ruta/list']);
  }

}
