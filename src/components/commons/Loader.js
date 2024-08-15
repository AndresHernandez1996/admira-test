import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { LoaderContainer } from '@styles/styled-components';

const Loader = () => (
  <LoaderContainer>
    <Flex align="center" gap="middle">
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 200,
            }}
            spin
          />
        }
      />
    </Flex>
  </LoaderContainer>
);
export default Loader;
