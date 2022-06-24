import React from "react";
import "./HeaderApp.css";
import {
  Layout,
  Button,
  Col,
  Row,
  Avatar,
  Badge,
  Image,
  Dropdown,
  Menu,
} from "antd";
import {
  AlignLeftOutlined,
  AlignRightOutlined,
  UserOutlined,
  BellOutlined,
  GlobalOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Header } = Layout;

const HeaderApp = ({ collapsed, setCollapsed }) => {
  const [keyLanguage, setKeyLanguage] = useState("1");

  const menu = (
    <Menu
      onClick={(e) => {
        setKeyLanguage(e.key);
      }}
      items={[
        {
          label: "English",
          key: "1",
          icon: <GlobalOutlined className="iconInMenuLanguageName" />,
        },
        {
          label: "Japan",
          key: "2",
          icon: <GlobalOutlined className="iconInMenuLanguageName" />,
        },
      ]}
      className="menuDropdownInContent"
    />
  );

  return (
    <Header className="headerContainer">
      <Row className="row">
        <Col className="col1">
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
        <Col className="col2" flex={"auto"}>
          <Row className="row1" gutter={15}>
            <Dropdown overlay={menu}>
              <Col className="contentColHeaderRight">
                <GlobalOutlined className="iconLanguageName" />
                <span className="textLanguageName">
                  {keyLanguage === "1" ? "English" : "Japan"}
                </span>
                <CaretDownOutlined className="iconMenuLanguageName" />
              </Col>
            </Dropdown>
            <Col className="iconSizeHeader">|</Col>
            <Col className="contentColHeaderRight">
              <Badge dot={{}}>
                <BellOutlined className="iconSizeHeader" />
              </Badge>
            </Col>
            <Col className="iconSizeHeader">|</Col>
            <Col className="contentColHeaderRight">
              <Avatar
                src={
                  <Image src="https://vcdn.kenhgamevn.com/wp-content/uploads/2021/04/31235039/khoanh-khac-vi-dai-cua-luffy-0-game4v.png" />
                }
                icon={<UserOutlined className="iconSizeHeader" />}
                className="avatarUserAccount"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderApp;
