import styled from 'styled-components';

export const HorizontalDivider = styled.hr`
  height: 1px;
  border: none;
  background-color: var(--secondary-color);
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const TitleCard = styled.span`
  color: var(--outer-space-color);
  font-size: 1.2em;
  font-weight: 600;
`;

export const GraphCard = styled.div`
  background-color: var(--white-color);
  width: 100%;
  min-width: 300px;
  max-width: 1000px;
  color: var(--dark-gray-color);
  padding: 24px;
  height: auto;
  border-radius: 16px;
  box-shadow: 2px 4px 18px 2px rgba(24, 80, 153, 0.12);
`;

export const CustomSection = styled.section`
  padding-top: 90px;
  display: flex;
  justify-content: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: ${(props) => (props.height ? `${props.height}` : 'auto')};
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  justify-content: ${(props) => (props.justifycontent ? `${props.justifycontent}` : 'flex-start')};
  align-items: ${(props) => (props.alignitems ? `${props.alignitems}` : 'stretch')};
  flex-direction: ${(props) => (props.direction ? `${props.direction}` : 'row')};
  flex-wrap: ${(props) => (props.wrap ? `${props.wrap}` : 'nowrap')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '8px 0 0')};
  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
`;

export const LoaderContainer = styled.div`
  position: absolute;
  background: var(--color-white);
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FloatContainer = styled.div`
  position: fixed;

  top: 75px;
  right: 10px;
  button {
    color: var(--primary-color);
  }
  @media (max-width: 750px) {
    display: none;
  }
`;
