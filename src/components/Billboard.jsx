import React, { useState } from 'react';
import { Layout, theme, FloatButton, Carousel } from 'antd';
import {
  ShoppingCartOutlined,
  ShoppingTwoTone,
} from '@ant-design/icons';
import cartelera from '../img/cartelera';
const { Sider, Content } = Layout;
const contentStyle = {
  height: '90vh',
  width: '100vw',
  color: '#ff0',
  lineHeight: '240px',
  textAlign: 'center',
  background: '#000000',
};

const Billboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [obra, setObra] = useState("obraaaaaaaa");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (


    <Layout>
      <Layout>

        <Content
          style={{
            minHeight: 100,
            height: "90vh",
            background: colorBgContainer,
          }}
        ><FloatButton
            type="text"
            icon={collapsed ? <ShoppingCartOutlined /> : <ShoppingTwoTone />}
            onClick={() => setCollapsed(!collapsed)}
            tooltip={<div>Comprar</div>}
            style={{
              fontSize: '20px',
              width: 80,
              height: 80,
              right: 95,
            }}
          />
          <Carousel autoplay={collapsed} afterChange={(n) => setObra(n)}>
            <div>
              <img style={contentStyle} src={cartelera.image1}></img>
            </div>
            <div>
              <img style={contentStyle} src={cartelera.image2}></img>
            </div>
            <div>
              <img style={contentStyle} src={cartelera.image3}></img>
            </div>
            <div>
              <img style={contentStyle} src={cartelera.image4}></img>
            </div>
          </Carousel>
        </Content>
        <Sider
          reverseArrow='true'
          collapsible
          collapsed={collapsed}
          collapsedWidth='1'
          onCollapse={(value) => setCollapsed(value)}
          width="50%"
        >
          <div className="demo-logo-vertical" />
          <h1>{obra}</h1>
        </Sider>
      </Layout>
    </Layout>
  );
}; 
export default Billboard;