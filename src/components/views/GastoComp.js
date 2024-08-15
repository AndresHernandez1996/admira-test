'use client';
import React from 'react';
import CardContainer from '@components/ui/CardContainer';
import Bar from '@components/charts/Bar';

const GastoComp = ({ data }) => {
  return (
    <CardContainer title="Gasto publicitario VS participación" sectionName="gasto">
      <Bar type="number" data={data} />
    </CardContainer>
  );
};

export default GastoComp;
