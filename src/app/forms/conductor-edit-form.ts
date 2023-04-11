import {FormControl} from "@angular/forms";

export interface ConductorEditForm {
  nombre: FormControl<string | null>;
  cedula: FormControl<string | null>;
  telefono: FormControl<string | null>;
  direccion: FormControl<string | null>;
}
