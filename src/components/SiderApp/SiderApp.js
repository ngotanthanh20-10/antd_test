import React from "react";
import "./SiderApp.css";
import { Image, Layout, Menu } from "antd";
import {
  FrownOutlined,
  CommentOutlined,
  BlockOutlined,
  TeamOutlined,
  DatabaseOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../img/logo.png";
const { Sider } = Layout;

const SiderApp = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="siderAppContainer"
    >
      <div className="logo">
        <Image className="image" src={logo} alt="" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <FrownOutlined className="sizeIconSider" />,
            label: "Complaint",
          },
          {
            key: "2",
            icon: <CommentOutlined className="sizeIconSider" />,
            label: "CRL",
          },
          {
            key: "3",
            icon: <BlockOutlined className="sizeIconSider" />,
            label: "Product",
          },
          {
            key: "4",
            icon: <TeamOutlined className="sizeIconSider" />,
            label: "BSC Account",
          },
          {
            key: "5",
            icon: <DatabaseOutlined className="sizeIconSider" />,
            label: "OEM Supplier",
          },
          {
            key: "6",
            icon: <UserOutlined className="sizeIconSider" />,
            label: "OEM User",
          },
        ]}
      />
    </Sider>
  );
};

export default SiderApp;
