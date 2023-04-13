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
              private router: Router,
              private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params =>
        this.conductorService.recuperarConductor(+params.get('id')!)
    )).subscribe(conductor => this.conductor = conductor);
  }

  saveConductor() {
    let conductor1: Conductor = new Conductor(this.conductorForm.value);
    conductor1.id = this.conductor.id
    this.conductorService.modificarConductor(conductor1).subscribe({
      next: dato => console.log(dato),
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
    this.router.navigate(['/conductor/list']);
  }

  cancel(){
    this.router.navigate(['/conductor/list']);
  }

}
