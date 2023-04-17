import {FormControl} from "@angular/forms";
import {Estacion} from "../model/estacion";
import {Horario} from "../model/horario";

export interface RutaEditForm {
  estaciones: FormControl<Estacion[] | null>;
  horario: FormControl<Horario | null>;
}
