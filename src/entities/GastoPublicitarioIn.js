export default class GastoPublicitarioIn {
  constructor({ data }) {
    this.xAxisData = data?.anuncios.map((xAxis) => xAxis?.nombre) || [];
    this.gasto = data?.anuncios.map((gastos) => gastos?.gastoPublicidad) || [];
    this.participacion =
      data?.anuncios.map((participaciones) => participaciones?.participación) || [];
  }

  get() {
    const obj = {
      xAxisData: this.xAxisData,
      series: [
        { type: 'line', name: 'Gasto Publicitario', data: this.gasto },
        { type: 'bar', name: 'Participación', data: this.participacion },
      ],
    };
    return obj;
  }
}
