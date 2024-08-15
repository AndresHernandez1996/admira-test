export default class DemografiaIn {
  constructor({ data }) {
    this.edades =
      data?.demografia.edad.map((edades) => ({ value: edades?.porcentaje, name: edades?.rango })) ||
      [];
    this.generos =
      data?.demografia.genero.map((generos) => ({
        value: generos?.porcentaje,
        name: generos?.tipo,
      })) || [];
  }

  get() {
    const obj = {
      edades: this.edades,
      generos: this.generos,
    };
    return obj;
  }
}
