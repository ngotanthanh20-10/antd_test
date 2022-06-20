import React, { useState } from "react";
import "./LayoutApp.css";
import { Layout } from "antd";
import HeaderApp from "./HeaderApp";
import SiderApp from "./SiderApp";
import HeaderComplaintList from "./HeaderComplaintList";
import SiderLeft from "./SiderLeft";
import { Col, Row } from "antd";
import Complaint from "./Complaint";

const LayoutApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [leftContent, setLeftContent] = useState(false);

  return (
    <Layout>
      <SiderApp collapsed={collapsed} />
      <Layout className="layout">
        <HeaderApp collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <div>
            <HeaderComplaintList
              leftContent={leftContent}
              setLeftContent={setLeftContent}
            />
          </div>
          <Layout>
            <Row>
              <Col flex="auto">
                <Layout>
                  <Complaint />
                </Layout>
              </Col>
              {!leftContent && (
                <Col flex="500px">
                  <SiderLeft
                    leftContent={leftContent}
                    setLeftContent={setLeftContent}
                  />
                </Col>
              )}
            </Row>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
