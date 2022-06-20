import React from "react";
import "./LayoutApp.css";
import { Layout, Button, Col, Row, Avatar, Badge, Image } from "antd";
import {
  AlignLeftOutlined,
  AlignRightOutlined,
  UserOutlined,
  BellOutlined,
  GlobalOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const HeaderApp = ({ collapsed, setCollapsed }) => {
  return (
    <Header className="backgroundHeader" style={{ height: "66px" }}>
      <Row>
        <Col xs={24} sm={18} md={8} lg={4}>
          {React.createElement(
            collapsed ? AlignLeftOutlined : AlignRightOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Button type="text">
            <p className="title">Complaint Listing</p>
          </Button>
        </Col>
        <Col
          xs={0}
          sm={6}
          md={16}
          lg={20}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Row
            gutter={15}
            style={{
              minWidth: "300px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Col
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GlobalOutlined style={{ fontSize: "30px", color: "#004072" }} />
            </Col>
            <Col
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: "400",
                font: "ABeeZee",
                lineHeight: "21px",
              }}
            >
              English
            </Col>
            <Col
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CaretDownOutlined
                style={{ width: "12px", height: "8px", color: "#333333" }}
              />
            </Col>
            <Col style={{ fontSize: "20px" }}>|</Col>
            <Col
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Badge style={{ width: "10px", height: "10px" }} dot={{}}>
                <BellOutlined style={{ fontSize: "20px" }} />
              </Badge>
            </Col>
            <Col style={{ fontSize: "20px" }}>|</Col>
            <Col
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                // size="large"
                src={
                  <Image
                    src="https://vcdn.kenhgamevn.com/wp-content/uploads/2021/04/31235039/khoanh-khac-vi-dai-cua-luffy-0-game4v.png"
                    style={{ width: 40 }}
                  />
                }
                icon={<UserOutlined style={{ fontSize: "20px" }} />}
                style={{ width: "36px", height: "36px" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderApp;
