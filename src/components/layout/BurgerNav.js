import React, { useRef } from 'react';
import { Button, Dropdown, Space } from 'antd';
import { useRouter } from 'next/navigation';
import { BurgerContainer } from '@styles/layout-components';

const BurgerNav = () => {
  const router = useRouter();
  const dropdownRef = useRef(null);

  const handleMenuClick = (e) => {
    const urlMapping = {
      1: '#rendimiento',
      2: '#tendencias',
      3: '#distribucion',
      4: '#gasto',
    };

    // Cierra el menú después de hacer clic
    dropdownRef.current?.click();

    // Navega a la URL correspondiente
    router.push(urlMapping[e.key]);
  };

  const items = [
    { label: 'Rendimiento', key: '1' },
    { label: 'Tendencias', key: '2' },
    { label: 'Distribución', key: '3' },
    { label: 'Gasto', key: '4' },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <BurgerContainer>
      <Space wrap>
        <Dropdown menu={menuProps} trigger={['click']} ref={dropdownRef}>
          <Button>☰</Button>
        </Dropdown>
      </Space>
    </BurgerContainer>
  );
};

export default BurgerNav;
