import React from "react";
import "./LayoutApp.css";
import { Layout, Collapse } from "antd";

const { Content } = Layout;
const { Panel } = Collapse;

const ContentComplainList = () => {
  return (
    <Content
      className="background"
      style={{
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        zIndex: "1",
      }}
    >
      <Collapse>
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
  );
};

export default ContentComplainList;
