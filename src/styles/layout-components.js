import styled from 'styled-components';

export const NavHeader = styled.header`
  width: 100%;
  height: 70px;
  padding: 16px;
  background: linear-gradient(var(--primary-color), var(--secondary-color));
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
`;

export const TitleHeader = styled.span`
  color: var(--white-color);
  font-size: 1.5em;
  font-weight: 600;
`;

export const NavListHeader = styled.div`
  width: 50%;
  max-width: 540px;
  height: inherit;
  font-family: inherit;

  > ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    padding-inline-start: 0;
    margin-block: 0;
    height: 100%;
  }

  ul > li {
    color: var(--white-color);
    margin: 0 0.2rem;
    padding: 0.2rem;
    display: block;
  }

  li > a:hover {
    cursor: pointer;
    border-bottom: 2px solid var(--white-color);
    transition: 0.1s ease;
  }

  li > a {
    font-size: 1em;
    font-weight: 500;
    color: inherit;
    text-decoration: none;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  margin-bottom: 100px;
`;
export const BurgerContainer = styled.div`
  width: 50px;
  @media (min-width: 750px) {
    display: none;
  }
`;
