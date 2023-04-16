import {Component, OnInit} from '@angular/core';
import {BusService} from "../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Bus} from "../../model/bus";
import {BusEditForm} from "../../forms/bus-edit-form";
import {switchMap} from "rxjs";
import {EstacionService} from "../../shared/estacion.service";
import {Estacion} from "../../model/estacion";
import {EstacionEditForm} from "../../forms/estacion-edit-form";

@Component({
  selector: 'app-estacion-create',
  templateUrl: './estacion-create.component.html',
  styleUrls: ['./estacion-create.component.css']
})
export class EstacionCreateComponent implements OnInit{
  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  estacion: Estacion = new Estacion()

  estacionForm = this.fb.group<EstacionEditForm>(
    {
      nombre: this.fb.control('', [Validators.required]),
    }
  );

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params =>
        this.estacionService.recuperarEstacion(+params.get('id')!)
      // this.personService.findById(+(params.get('id') || 1))
    )).subscribe(estacion => this.estacion = estacion);
  }

  crearEstacion() {
    let estacion1: Estacion = new Estacion(this.estacionForm.value);
    this.estacionService.crearEstacion(estacion1).subscribe({
      next: dato => console.log(dato),
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
    this.router.navigate(['/estacion/list']);
  }
  cancel(){
    this.router.navigate(['/estacion/list']);
  }

}
