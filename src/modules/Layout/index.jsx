import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, theme, FloatButton } from 'antd';
import {
  ShoppingCartOutlined,
  ShoppingTwoTone,
  HomeOutlined,
}from '@ant-design/icons';
import Topbar from '../../components/Topbar';

const { Header, Content} = Layout;


const App = () => {


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    

    <Layout>
      <Header
        style={{
          display: 'flex',
          align: 'center',
          placeContent: 'space-around',
          alignItems: 'center',
          padding: 0,
          background: '#000000',
          color: '#fff',
          height: "10vh",
        }}
      >
        <Topbar />
      </Header>
      <Layout>

        <Content
          style={{
            minHeight: 100,
            height: "90vh",
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
        
      </Layout>
    </Layout>
  );
};
export default App;