export default class TendenciasIn {
  constructor({ data }) {
    this.xAxisData = data?.vistasPagina.map((xAxis) => xAxis?.fecha) || [];
    this.vistasPagina = data?.vistasPagina.map((item) => item?.vistas) || [];
    this.sesiones = data?.sesiones.map((item) => item?.sesiones) || [];
  }

  get() {
    const obj = {
      xAxisData: this.xAxisData,
      series: [
        { name: 'Vistas de página', data: this.vistasPagina },
        { name: 'Sesiones', data: this.sesiones },
      ],
    };
    return obj;
  }
}
