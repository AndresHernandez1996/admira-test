import BurgerNav from './BurgerNav';

const { NavHeader, TitleHeader, NavListHeader } = require('@styles/layout-components');

const Navbar = () => {
  return (
    <NavHeader>
      <div>
        <TitleHeader>Front-End Admira test</TitleHeader>
      </div>
      <NavListHeader>
        <ul>
          <li>
            <a href="#rendimiento">Rendimiento</a>
          </li>
          <li>
            <a href="#tendencias">Tendencias</a>
          </li>
          <li>
            <a href="#distribucion">Distribución</a>
          </li>
          <li>
            <a href="#gasto">Gasto</a>
          </li>
        </ul>
      </NavListHeader>
      <BurgerNav />
    </NavHeader>
  );
};

export default Navbar;
