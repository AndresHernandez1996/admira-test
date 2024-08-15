'use client';
// DEPENDENCIES
import React, { useState, useEffect } from 'react';
import { ContentWrapper } from '@styles/layout-components';
import { mock1, mock2, mock3 } from 'src/mocks';

// ENTITIES
import RendimientoIn from '@entities/RendimientoIn';
import TendenciasIn from '@entities/TendenciasIn';
import DemografiaIn from '@entities/DemografiaIn';
import GastoPublicitarioIn from '@entities/GastoPublicitarioIn';

// COMPONENTES
import Navbar from '@components/layout/Navbar';
import RendimientoComp from '@components/views/RendimientoComp';
import TendenciasComp from '@components/views/TendenciasComp';
import DistribucionComp from '@components/views/DistribucionComp';
import GastoComp from '@components/views/GastoComp';
import Loader from '@components/ui/Loader';
import FloatButton from '@components/ui/FloatButton';
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [rendimiento, setRendimiento] = useState({});
  const [sesiones, setSesiones] = useState({});
  const [demografia, setDemografia] = useState({});
  const [gasto, setGasto] = useState({});

  useEffect(() => {
    const fetchRendimiento = async () => {
      try {
        // Usando Promise.all para manejar múltiples promesas en el futuro
        const [rendimientoFetch, tendenciaFetch, demografiaFetch, gastoFetch] = await Promise.all([
          new Promise((resolve) => {
            const rendimientoIn = new RendimientoIn({ data: mock2 });
            resolve(rendimientoIn);
          }),
          new Promise((resolve) => {
            const tendenciaIn = new TendenciasIn({ data: mock1 });
            resolve(tendenciaIn);
          }),
          new Promise((resolve) => {
            const demografiaIn = new DemografiaIn({ data: mock1 });
            resolve(demografiaIn);
          }),
          new Promise((resolve) => {
            const gastoIn = new GastoPublicitarioIn({ data: mock3 });
            resolve(gastoIn);
          }),
        ]);

        // Actualiza el estado con los datos formateados
        setRendimiento(rendimientoFetch.get());
        setSesiones(tendenciaFetch.get());
        setDemografia(demografiaFetch.get());
        setGasto(gastoFetch.get());
        await setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Llamada a la función asíncrona
    fetchRendimiento();
    return () => null;
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <main>
        <ContentWrapper>
          <FloatButton />
          {/* RENDIMIENTO */}
          <RendimientoComp data={rendimiento} />
          {/* TENDENCIAS */}
          <TendenciasComp data={sesiones} />
          {/* DEMOGRAFÍA */}
          <DistribucionComp data={demografia} />
          {/* GASTO */}
          <GastoComp data={gasto} />
        </ContentWrapper>
      </main>
    </>
  );
};

export default Dashboard;
