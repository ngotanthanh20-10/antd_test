import React from "react";
import "./LayoutApp.css";
import { Layout, Menu, Button, Col, Row, Space, Dropdown, Input } from "antd";
import {
  UserOutlined,
  DownOutlined,
  SearchOutlined,
  ExportOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const HeaderComplaintList = ({ leftContent, setLeftContent }) => {
  return (
    <Content
      className="background"
      style={{
        margin: "10px",
        padding: "10px",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Row>
        <Col flex="3">
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
        </Col>
        <Col flex="7">
          <Row>
            <Col flex="29">
              <Row>
                <Col flex="9" style={{ marginRight: "10px" }}>
                  <Input
                    size="middle"
                    placeholder="large size"
                    prefix={<SearchOutlined />}
                    style={{ borderRadius: "10px" }}
                  />
                </Col>
                <Col flex="1">
                  <Button
                    type="primary"
                    icon={<ExportOutlined />}
                    size="middle"
                    style={{ borderRadius: "5px" }}
                  />
                </Col>
              </Row>
            </Col>
            <Col flex="1">
              <Button
                type="primary"
                icon={
                  leftContent ? <LeftSquareOutlined /> : <RightSquareOutlined />
                }
                size="middle"
                onClick={() => setLeftContent(!leftContent)}
                style={{ borderRadius: "5px" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default HeaderComplaintList;
