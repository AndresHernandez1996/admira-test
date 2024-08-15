import React from 'react';
import { Button, Popover, Space } from 'antd';
import { FloatContainer } from '@styles/styled-components';

const FloatButton = () => (
  <FloatContainer>
    <Space wrap>
      <Popover
        title="Haz click en los nombres de los indicadores para ocultarlos o mostrarlos"
        trigger="hover"
        placement="bottomRight"
      >
        <Button shape="circle">?</Button>
      </Popover>
    </Space>
  </FloatContainer>
);
export default FloatButton;
