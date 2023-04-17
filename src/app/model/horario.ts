export class Horario {
  public id?: number | null;
  public dias?: string | null;
  public HoraInicio?: string | null;
  public HoraFin?: string | null;

  public constructor(init?: Partial<Horario>) {
    Object.assign(this, init);
  }
}
