import {FormControl} from "@angular/forms";

export interface BusEditForm {
  placa: FormControl<string | null>;
  modelo: FormControl<string | null>;
}
