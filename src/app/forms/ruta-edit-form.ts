import {FormControl} from "@angular/forms";

export interface RutaEditForm {
  estaciones: FormControl<string | null>;
  horario: FormControl<string | null>;
}
