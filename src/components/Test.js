import React from "react";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

const Test = () => {
  return (
    <>
      <Layout>
        <Sider style={{ backgroundColor: "pink" }}>Sider</Sider>
        <Layout>
          <Header style={{ backgroundColor: "blue" }}>Header</Header>
          <Layout>
            <Header style={{ backgroundColor: "orange" }}>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider style={{ backgroundColor: "red" }}>Sider</Sider>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Test;
