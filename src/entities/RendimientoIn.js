export default class RendimientoIn {
  constructor({ data }) {
    this.xAxisData = data?.campanas.map((xAxis) => xAxis?.nombre) || [];
    this.impresiones = data?.campanas.map((campana) => campana?.impresiones) || [];
    this.clics = data?.campanas.map((campana) => campana?.clics) || [];
    this.conversiones = data?.campanas.map((campana) => campana?.conversiones) || [];
    this.costo = data?.campanas.map((campana) => campana?.costo) || [];
  }

  get() {
    const obj = {
      xAxisData: this.xAxisData,
      series: [
        { type: 'bar', name: 'Impresiones', data: this.impresiones },
        { type: 'bar', name: 'Clics', data: this.clics },
        { type: 'bar', name: 'Conversiones', data: this.conversiones },
        { type: 'bar', name: 'Costo', data: this.costo },
      ],
    };
    return obj;
  }
}
