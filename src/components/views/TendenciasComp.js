'use client';
import React from 'react';
import Bar from '@components/charts/Bar';
import CardContainer from '@components/ui/CardContainer';

const TendenciasComp = ({ data }) => {
  return (
    <CardContainer title="Tendencias" sectionName="tendencias">
      <Bar type="number" data={data?.xAxisData?.length && data} />
    </CardContainer>
  );
};

export default TendenciasComp;
