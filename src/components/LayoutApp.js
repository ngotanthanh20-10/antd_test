import React, { useState } from "react";
import "./LayoutApp.css";
import {
  Layout,
  Menu,
  Button,
  Col,
  Row,
  Avatar,
  Space,
  Collapse,
  Dropdown,
  Input,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlusCircleOutlined,
  DownOutlined,
  SearchOutlined,
  ExportOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";
import GrabIcon from "../img/grab.png";

const { Header, Sider, Content } = Layout;
const { Panel } = Collapse;

const LayoutApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [leftContent, setLeftContent] = useState(true);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ maxHeight: 1000 }}
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
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
            {
              key: "4",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "5",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "6",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="layout">
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
        <Content
          className="background"
          style={{
            margin: "10px",
            padding: "10px",
            height: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Dropdown
            overlay={
              <Menu
                items={[
                  {
                    label: "1st menu item",
                    key: "1",
                    icon: <UserOutlined />,
                  },
                  {
                    label: "2nd menu item",
                    key: "2",
                    icon: <UserOutlined />,
                  },
                  {
                    label: "3rd menu item",
                    key: "3",
                    icon: <UserOutlined />,
                  },
                ]}
              />
            }
          >
            <Button style={{ borderRadius: "10px" }}>
              <Space>
                My Complaint
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Input
            size="middle"
            placeholder="large size"
            prefix={<SearchOutlined />}
            style={{ borderRadius: "10px" }}
          />
          <Button type="primary" icon={<ExportOutlined />} size="middle" />
          <Button
            type="primary"
            icon={
              leftContent ? <LeftSquareOutlined /> : <RightSquareOutlined />
            }
            size="middle"
            onClick={() => setLeftContent(!leftContent)}
          />
        </Content>
        <Content
          className="background"
          style={{ margin: "10px", padding: "10px" }}
        >
          <Collapse onChange={onChange}>
            <Panel header="This is panel header 1" key="1">
              <p>ngo tan thanh</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>ngo tan thanh</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>ngo tan thanh</p>
            </Panel>
          </Collapse>
        </Content>
      </Layout>
      {!leftContent && (
        <Sider
          trigger={null}
          collapsible
          collapsed={leftContent}
          style={{ maxHeight: 1000 }}
        >
          Sider
        </Sider>
      )}
    </Layout>
  );
};

export default LayoutApp;
