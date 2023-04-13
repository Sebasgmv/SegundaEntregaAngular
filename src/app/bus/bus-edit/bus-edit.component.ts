import {Component, OnInit} from '@angular/core';
import {Bus} from "../../model/bus";
import {BusService} from "../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {ConductorEditForm} from "../../forms/conductor-edit-form";
import {FormBuilder, Validators} from "@angular/forms";
import {BusEditForm} from "../../forms/bus-edit-form";
import {Conductor} from "../../model/conductor";

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent implements OnInit{
  constructor(private busService: BusService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  bus: Bus = new Bus()

  busForm = this.fb.group<BusEditForm>(
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

  saveBus() {
    let bus1: Bus = new Bus(this.busForm.value);
    bus1.id = this.bus.id
    this.busService.modificarBus(bus1).subscribe({
      next: dato => console.log(dato),
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
    this.router.navigate(['/bus/list']);
  }
  cancel(){
    this.router.navigate(['/bus/list']);
  }
}
