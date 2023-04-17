export class Estacion {
  public id?: number | null;
  public nombre?: string | null;


  public constructor(init?: Partial<Estacion>) {
    Object.assign(this, init);
  }

}
