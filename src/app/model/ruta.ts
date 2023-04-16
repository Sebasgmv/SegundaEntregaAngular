import {Estacion} from "./estacion";
import {Horario} from "./horario";

export class Ruta {
  public id?: number | null;
  public estaciones?: string | null;
  public horario?: string | null;

  public constructor(init?: Partial<Ruta>) {
    Object.assign(this, init);
  }
}
