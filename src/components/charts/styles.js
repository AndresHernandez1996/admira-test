import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';

const ReactEchartsCustom = styled(ReactEcharts)`
  & div svg g text {
    font-family: var(--font-gabarito) !important;
    font-weight: 400 !important;
    font-size: 12px !important;
  }
  @media (max-width: 400px) {
    & div svg g text {
      font-size: 8px !important;
    }
  }
`;

export { ReactEchartsCustom };
