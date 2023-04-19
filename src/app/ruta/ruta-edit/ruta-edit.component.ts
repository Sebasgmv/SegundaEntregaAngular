import {Component, OnInit} from '@angular/core';
import {RutaService} from "../../shared/ruta.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Ruta} from "../../model/ruta";
import {Estacion} from "../../model/estacion";
import {Horario} from "../../model/horario";
import {RutaEditForm} from "../../forms/ruta-edit-form";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-ruta-edit',
  templateUrl: './ruta-edit.component.html',
  styleUrls: ['./ruta-edit.component.css']
})
export class RutaEditComponent implements OnInit{
  constructor(private rutaService: RutaService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ruta: Ruta = new Ruta()
  nestaciones: number = 0
  nhorarios: number = 0

  estacionesSelec: Estacion[] = []
  horariosSelec: Horario[] = []

  rutaForm = this.fb.group<RutaEditForm>(
    {
      estaciones: this.fb.control(null),
      horario: this.fb.control(null, [Validators.required]),
    }
  );

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params =>
      this.rutaService.recuperarRuta(+params.get('id')!)
    )).subscribe(ruta => this.ruta = ruta);
  }

  crearRuta() {
    if (!this.estacionesSelec.length){
      console.log("This array is empty!")
      alert("Se requieren estaciones para la ruta")
    }else {
      if (!this.horariosSelec.length){
        console.log("This array is empty!")
        alert("Se requiere solo 1 horario para la ruta")
      }else {
        let ruta1: Ruta = new Ruta();
        ruta1.id = this.ruta.id
        ruta1.estaciones = this.estacionesSelec
        this.horariosSelec.filter(h => ruta1.horario = h)
        this.rutaService.crearRuta(ruta1).subscribe({
          next: dato => console.log(dato),
          error: msg => {
            console.error("Hubo un error:");
            console.error(msg);
          }
        });
        this.router.navigate(['/ruta/list']);
      }
    }
  }
  cancel(){
    this.router.navigate(['/ruta/list']);
  }
  updateCountHorarios(selection: boolean[]) {
    this.nhorarios = selection.filter(x => x).length;
    console.log(selection)
  }
  cargarHorariosSelecionadas(horarios: Horario[]) {
    this.horariosSelec = horarios
    console.log(this.horariosSelec)
  }
  updateCountEstaciones(selection: boolean[]) {
    this.nestaciones = selection.filter(x => x).length;
    console.log(selection)
  }
  cargarEstacionesSelecionadas(estaciones: Estacion[]) {
    this.estacionesSelec = estaciones
    console.log(this.estacionesSelec)
  }
}
