import {Estacion} from "./estacion";
import {Horario} from "./horario";
import {Trabajo} from "./trabajo";

export class Ruta {
  public id?: number | null;
  public estaciones?: Estacion[] | null;
  public horario?: Horario | null;
  public trabajo?: Trabajo | null;

  public constructor(init?: Partial<Ruta>) {
    Object.assign(this, init);
  }
}
