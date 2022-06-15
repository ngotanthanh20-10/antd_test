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
import GrabIcon from "../img/grab.png";
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
          src={GrabIcon}
          style={
            collapsed
              ? { height: "60%", transition: ".3s" }
              : { height: "100%", transition: ".3s" }
          }
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <FrownOutlined />,
            label: "Complaint",
          },
          {
            key: "2",
            icon: <CommentOutlined />,
            label: "CRL",
          },
          {
            key: "3",
            icon: <BlockOutlined />,
            label: "Product",
          },
          {
            key: "4",
            icon: <TeamOutlined />,
            label: "BSC Account",
          },
          {
            key: "5",
            icon: <DatabaseOutlined />,
            label: "OEM Supplier",
          },
          {
            key: "6",
            icon: <UserOutlined />,
            label: "OEM User",
          },
        ]}
      />
    </Sider>
  );
};

export default SiderApp;
