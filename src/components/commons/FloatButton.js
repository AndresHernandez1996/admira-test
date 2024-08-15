import React from 'react';
import { Button, Popover, Space } from 'antd';
import { FloatContainer } from '@styles/styled-components';

const FloatButton = () => (
  <FloatContainer>
    <Space wrap>
      <Popover
        trigger="hover"
        placement="bottomRight"
        content="Haz click en los nombres de los indicadores para ocultarlos o mostrarlos"
      >
        <Button shape="circle">?</Button>
      </Popover>
    </Space>
  </FloatContainer>
);
export default FloatButton;
