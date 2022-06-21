import React, { useState } from "react";
import "./Layout.css";
import { Layout, Col, Row } from "antd";
import HeaderApp from "../HeaderApp/HeaderApp";
import SiderApp from "../SiderApp/SiderApp";
import HeaderComplaint from "../HeaderComplaint/HeaderComplaint";
import SiderLeft from "../SiderLeft/SiderLeft";
import Complaint from "../ComplaintForm/ComplaintForm";
import StaticHeader from "../StaticHeader/StaticHeader";

const LayoutApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [leftContent, setLeftContent] = useState(false);

  return (
    <Layout className="layoutContainer">
      <SiderApp collapsed={collapsed} />
      <Layout className="layout">
        <HeaderApp collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <div>
            <HeaderComplaint
              leftContent={leftContent}
              setLeftContent={setLeftContent}
            />
          </div>
          <Layout>
            <Row>
              <Col flex="auto">
                <StaticHeader />
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
