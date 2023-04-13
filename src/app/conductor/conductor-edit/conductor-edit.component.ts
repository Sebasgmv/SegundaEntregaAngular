import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {ConductorEditForm} from "../../forms/conductor-edit-form";

@Component({
  selector: 'app-conductor-edit',
  templateUrl: './conductor-edit.component.html',
  styleUrls: ['./conductor-edit.component.css']
})
export class ConductorEditComponent implements OnInit{

  conductor: Conductor = new Conductor()

  conductorForm = this.fb.group<ConductorEditForm>(
    {
      nombre: this.fb.control('', [Validators.required]),
      cedula: this.fb.control('', [Validators.required]),
      telefono: this.fb.control('', [Validators.required]),
      direccion: this.fb.control('', [Validators.required]),
    }
  );

  constructor(private conductorService: ConductorService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params =>
        this.conductorService.recuperarConductor(+params.get('id')!)
    )).subscribe(conductor => this.conductor = conductor);
  }

  savePerson() {
    let conductor: Conductor = new Conductor(this.conductorForm.value);
  }

}
