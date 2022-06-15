import React, { useState } from "react";
import "./LayoutApp.css";
import { Layout, Button, Col, Row, Avatar, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  PlusCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./LayoutApp.css";

const { Header } = Layout;

const HeaderApp = ({ collapsed, setCollapsed }) => {
  return (
    <Header className="background" style={{ padding: 0 }}>
      <Row>
        <Col flex="7">
          <div className="headerLeft">
            {React.createElement(
              collapsed ? MenuFoldOutlined : MenuUnfoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <Button type="text">
              <p className="title">Complaint Listing</p>
            </Button>
          </div>
        </Col>
        <Col
          flex="3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row>
            <Space size="large">
              <Col style={{ cursor: "pointer" }}>
                <Button type="primary" style={{ borderRadius: "10px" }}>
                  <PlusCircleOutlined /> New Complaint
                </Button>
              </Col>
              <Col style={{ cursor: "pointer" }}>
                <Avatar
                  size="small"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                />
                <Button type="text">English</Button>
              </Col>
              <Col style={{ cursor: "pointer" }}>
                <Avatar size="large" icon={<UserOutlined />} />
                <Button type="text">
                  QC QA <DownOutlined />
                </Button>
              </Col>
            </Space>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderApp;
