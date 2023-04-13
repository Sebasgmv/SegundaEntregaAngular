import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorEditForm} from "../../forms/conductor-edit-form";
import {FormBuilder, Validators} from "@angular/forms";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-conductor-create',
  templateUrl: './conductor-create.component.html',
  styleUrls: ['./conductor-create.component.css']
})
export class ConductorCreateComponent implements OnInit{

  constructor(private conductorService: ConductorService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  conductor: Conductor = new Conductor()

  conductorForm = this.fb.group<ConductorEditForm>(
    {
      nombre: this.fb.control('', [Validators.required]),
      cedula: this.fb.control('', [Validators.required]),
      telefono: this.fb.control('', [Validators.required]),
      direccion: this.fb.control('', [Validators.required]),
    }
  );


  ngOnInit(): void {
  }

  crearConductor() {
    let conductor1: Conductor = new Conductor(this.conductorForm.value);
    this.conductorService.crearConductor(conductor1).subscribe({
      next: dato => console.log(dato),
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
    this.router.navigate(['/conductor/list']);
  }

}
