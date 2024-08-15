export const mock1 = {
  vistasPagina: [
    { fecha: '2024-08-01', vistas: 300 },
    { fecha: '2024-08-02', vistas: 450 },
    { fecha: '2024-08-03', vistas: 500 },
    { fecha: '2024-08-04', vistas: 350 },
  ],
  sesiones: [
    { fecha: '2024-08-01', sesiones: 200, tasaRebote: 0.35, duracionMedia: '3m 15s' },
    { fecha: '2024-08-02', sesiones: 300, tasaRebote: 0.4, duracionMedia: '2m 45s' },
    { fecha: '2024-08-03', sesiones: 250, tasaRebote: 0.3, duracionMedia: '3m 30s' },
    { fecha: '2024-08-04', sesiones: 400, tasaRebote: 0.28, duracionMedia: '4m 00s' },
  ],
  demografia: {
    edad: [
      { rango: '18-24', porcentaje: 25 },
      { rango: '25-34', porcentaje: 40 },
      { rango: '35-44', porcentaje: 20 },
      { rango: '45-54', porcentaje: 10 },
      { rango: '55+', porcentaje: 5 },
    ],
    genero: [
      { tipo: 'Hombre', porcentaje: 55 },
      { tipo: 'Mujer', porcentaje: 45 },
    ],
  },
  dispositivos: [
    { tipo: 'móvil', porcentaje: 65 },
    { tipo: 'escritorio', porcentaje: 30 },
    { tipo: 'tablet', porcentaje: 5 },
  ],
  ubicacionGeografica: [
    { pais: 'Estados Unidos', porcentaje: 45 },
    { pais: 'México', porcentaje: 20 },
    { pais: 'España', porcentaje: 15 },
    { pais: 'Colombia', porcentaje: 10 },
    { pais: 'Argentina', porcentaje: 10 },
  ],
};

export const mock2 = {
  campanas: [
    {
      nombre: 'Campaña 1',
      impresiones: 1000,
      clics: 150,
      conversiones: 20,
      costo: 200,
    },
    {
      nombre: 'Campaña 2',
      impresiones: 2000,
      clics: 300,
      conversiones: 50,
      costo: 350,
    },
    {
      nombre: 'Campaña 3',
      impresiones: 1500,
      clics: 220,
      conversiones: 30,
      costo: 250,
    },
    {
      nombre: 'Campaña 4',
      impresiones: 3000,
      clics: 450,
      conversiones: 60,
      costo: 500,
    },
    {
      nombre: 'Campaña 5',
      impresiones: 2500,
      clics: 400,
      conversiones: 55,
      costo: 450,
    },
    {
      nombre: 'Campaña 6',
      impresiones: 1200,
      clics: 180,
      conversiones: 25,
      costo: 220,
    },
    {
      nombre: 'Campaña 7',
      impresiones: 3500,
      clics: 500,
      conversiones: 70,
      costo: 600,
    },
    {
      nombre: 'Campaña 8',
      impresiones: 1800,
      clics: 250,
      conversiones: 35,
      costo: 300,
    },
    {
      nombre: 'Campaña 9',
      impresiones: 2200,
      clics: 320,
      conversiones: 45,
      costo: 370,
    },
    {
      nombre: 'Campaña 10',
      impresiones: 5000,
      clics: 800,
      conversiones: 100,
      costo: 700,
    },
    {
      nombre: 'Campaña 11',
      impresiones: 1700,
      clics: 210,
      conversiones: 28,
      costo: 260,
    },
    {
      nombre: 'Campaña 12',
      impresiones: 2800,
      clics: 370,
      conversiones: 48,
      costo: 420,
    },
  ],
};

export const mock3 = {
  anuncios: [
    {
      nombre: 'Anuncio 1',
      alcance: 5000,
      participación: 300,
      gastoPublicidad: 100,
      conversiones: 30,
    },
    {
      nombre: 'Anuncio 2',
      alcance: 7500,
      participación: 500,
      gastoPublicidad: 150,
      conversiones: 45,
    },
    {
      nombre: 'Anuncio 3',
      alcance: 6000,
      participación: 400,
      gastoPublicidad: 120,
      conversiones: 35,
    },
    {
      nombre: 'Anuncio 4',
      alcance: 8000,
      participación: 550,
      gastoPublicidad: 180,
      conversiones: 50,
    },
    {
      nombre: 'Anuncio 5',
      alcance: 7000,
      participación: 450,
      gastoPublicidad: 140,
      conversiones: 40,
    },
    {
      nombre: 'Anuncio 6',
      alcance: 9000,
      participación: 600,
      gastoPublicidad: 200,
      conversiones: 55,
    },
    {
      nombre: 'Anuncio 7',
      alcance: 5500,
      participación: 320,
      gastoPublicidad: 110,
      conversiones: 28,
    },
    {
      nombre: 'Anuncio 8',
      alcance: 8500,
      participación: 580,
      gastoPublicidad: 170,
      conversiones: 48,
    },
    {
      nombre: 'Anuncio 9',
      alcance: 9500,
      participación: 630,
      gastoPublicidad: 220,
      conversiones: 60,
    },
    {
      nombre: 'Anuncio 10',
      alcance: 7200,
      participación: 460,
      gastoPublicidad: 150,
      conversiones: 42,
    },
    {
      nombre: 'Anuncio 11',
      alcance: 6400,
      participación: 370,
      gastoPublicidad: 130,
      conversiones: 33,
    },
    {
      nombre: 'Anuncio 12',
      alcance: 8100,
      participación: 540,
      gastoPublicidad: 190,
      conversiones: 52,
    },
  ],
};

export const mock4 = {
  leads: [
    { nombre: 'Lead 1', costoAdquisición: 200, valorDeVida: 1000 },
    { nombre: 'Lead 2', costoAdquisición: 150, valorDeVida: 750 },
    { nombre: 'Lead 3', costoAdquisición: 180, valorDeVida: 950 },
    { nombre: 'Lead 4', costoAdquisición: 220, valorDeVida: 1100 },
    { nombre: 'Lead 5', costoAdquisición: 170, valorDeVida: 850 },
    { nombre: 'Lead 6', costoAdquisición: 160, valorDeVida: 800 },
    { nombre: 'Lead 7', costoAdquisición: 190, valorDeVida: 900 },
    { nombre: 'Lead 8', costoAdquisición: 210, valorDeVida: 950 },
    { nombre: 'Lead 9', costoAdquisición: 175, valorDeVida: 870 },
    { nombre: 'Lead 10', costoAdquisición: 200, valorDeVida: 1000 },
    { nombre: 'Lead 11', costoAdquisición: 185, valorDeVida: 920 },
    { nombre: 'Lead 12', costoAdquisición: 205, valorDeVida: 1050 },
  ],
  tasaConversión: 0.1,
};
