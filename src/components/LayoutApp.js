import React, { useState } from "react";
import "./LayoutApp.css";
import { Layout } from "antd";
import HeaderApp from "./HeaderApp";
import SiderApp from "./SiderApp";
import HeaderComplaintList from "./HeaderComplaintList";
import ContentComplainList from "./ContentComplainList";
import SiderLeft from "./SiderLeft";
import StaticHeader from "./StaticHeader";
import { Col, Row } from "antd";

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
              <Col flex="auto" style={{ transition: "30s" }}>
                <Layout>
                  <div
                    style={{
                      width: "1200px",
                    }}
                  >
                    <StaticHeader />
                  </div>
                  <ContentComplainList />
                </Layout>
              </Col>
              {!leftContent && (
                <Col flex="2">
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
