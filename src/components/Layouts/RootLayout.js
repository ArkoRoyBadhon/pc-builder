import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import Navbar from "../UI/Navbar";
import FooterCom from "../UI/FooterCom";
const { Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Navbar />
      <Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <FooterCom />
    </Layout>
  );
};

export default RootLayout;
