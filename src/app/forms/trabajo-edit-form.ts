import {FormControl} from "@angular/forms";
import {Estacion} from "../model/estacion";
import {Horario} from "../model/horario";
import {Bus} from "../model/bus";
import {Ruta} from "../model/ruta";
import {Conductor} from "../model/conductor";
import {Trabajo} from "../model/trabajo";

export interface TrabajoEditForm {
  bus: FormControl<Bus | null>;
  ruta: FormControl<Ruta | null>;
  conductor: FormControl<Conductor | null>;
}
