import {Component, OnInit} from '@angular/core';
import {BusService} from "../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Bus} from "../../model/bus";
import {BusEditForm} from "../../forms/bus-edit-form";
import {switchMap} from "rxjs";
import {RutaService} from "../../shared/ruta.service";
import {Ruta} from "../../model/ruta";

@Component({
  selector: 'app-ruta-create',
  templateUrl: './ruta-create.component.html',
  styleUrls: ['./ruta-create.component.css']
})
export class RutaCreateComponent implements OnInit{
  constructor(private rutaService: RutaService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ruta: Ruta = new Ruta()

  busForm = this.fb.group<RutaE>(
    {
      placa: this.fb.control('', [Validators.required]),
      modelo: this.fb.control('', [Validators.required]),
    }
  );

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params =>
        this.busService.recuperarBus(+params.get('id')!)
      // this.personService.findById(+(params.get('id') || 1))
    )).subscribe(bus => this.bus = bus);
  }

  crearBus() {
    let bus1: Bus = new Bus(this.busForm.value);
    this.busService.editarBus(bus1).subscribe({
      next: dato => console.log(dato),
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
    this.router.navigate(['/bus/list']);
  }
  cancel(){
    this.router.navigate(['/conductor/list']);
  }
}
