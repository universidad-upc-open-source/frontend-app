export class CentroSalud {
  constructor(
    public codigo: number,
    public nombre: string,
    public tipo: string,
    public calificacionInfraestructura: number,
    public calificacionServicios: number,
    public ambulancias: boolean
  ) {}
}
