'use client';
import React from 'react';
import Bar from '@components/charts/Bar';
import CardContainer from '@components/commons/CardContainer';

const RendimientoComp = ({ data }) => {
  return (
    <CardContainer title="Rendimiento de campaña" sectionName="rendimiento">
      <Bar type="number" data={data?.xAxisData?.length && data} />
    </CardContainer>
  );
};

export default RendimientoComp;
