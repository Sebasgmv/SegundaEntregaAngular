import {Bus} from "./bus";
import {Ruta} from "./ruta";
import {Conductor} from "./conductor";

export class Trabajo {
  public id?: number | null;
  public bus?: Bus | null;
  public ruta?: Ruta | null;
  public conductor?: Conductor | null;

  public constructor(init?: Partial<Ruta>) {
    Object.assign(this, init);
  }
}
