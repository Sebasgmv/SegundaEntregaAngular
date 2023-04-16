export class Horario {
  public id?: number | null;
  public inicio?: string | null;
  public fin?: string | null;

  public constructor(init?: Partial<Horario>) {
    Object.assign(this, init);
  }
}
