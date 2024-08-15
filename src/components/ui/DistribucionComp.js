'use client';
import React from 'react';
import CardContainer from '@components/commons/CardContainer';
import { Pie } from '@components/charts/Pie';
import { FlexContainer } from '@styles/styled-components';

const DistribucionComp = ({ data }) => {
  return (
    <CardContainer title="Distribución demográfica" sectionName="distribucion">
      <FlexContainer justifycontent="space-evenly" alignitems="center" wrap="wrap">
        <FlexContainer width="auto" direction="column" alignitems="center">
          <h4>Por edades</h4>
          <Pie data={data?.edades} type="percent" />
        </FlexContainer>
        <FlexContainer width="auto" direction="column" alignitems="center">
          <h4>Por género</h4>
          <Pie data={data?.generos} type="percent" />
        </FlexContainer>
      </FlexContainer>
    </CardContainer>
  );
};

export default DistribucionComp;
