import React from "react";
import "./LayoutApp.css";
import { Layout, Menu } from "antd";
import {
  FrownOutlined,
  CommentOutlined,
  BlockOutlined,
  TeamOutlined,
  DatabaseOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../img/logo.png";
const { Sider } = Layout;

const SiderApp = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ minHeight: "100vh" }}
    >
      <div className="logo">
        <img
          src={logo}
          style={{
            height: "66px",
            transition: ".3s",
            border: "1px solid white",
          }}
          alt=""
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <FrownOutlined style={{ fontSize: "20px" }} />,
            label: "Complaint",
          },
          {
            key: "2",
            icon: <CommentOutlined style={{ fontSize: "20px" }} />,
            label: "CRL",
          },
          {
            key: "3",
            icon: <BlockOutlined style={{ fontSize: "20px" }} />,
            label: "Product",
          },
          {
            key: "4",
            icon: <TeamOutlined style={{ fontSize: "20px" }} />,
            label: "BSC Account",
          },
          {
            key: "5",
            icon: <DatabaseOutlined style={{ fontSize: "20px" }} />,
            label: "OEM Supplier",
          },
          {
            key: "6",
            icon: <UserOutlined style={{ fontSize: "20px" }} />,
            label: "OEM User",
          },
        ]}
      />
    </Sider>
  );
};

export default SiderApp;
