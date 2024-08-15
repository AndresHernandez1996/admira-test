import { HorizontalDivider, TitleCard, GraphCard, CustomSection } from '@styles/styled-components';
import React from 'react';

const CardContainer = ({ title, sectionName, children }) => {
  return (
    <CustomSection role="region" aria-labelledby={sectionName} id={sectionName}>
      <GraphCard>
        <TitleCard>{title}</TitleCard>
        <HorizontalDivider />
        {children}
      </GraphCard>
    </CustomSection>
  );
};
export default CardContainer;
