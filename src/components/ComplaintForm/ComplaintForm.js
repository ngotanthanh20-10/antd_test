import React from "react";
import "./ComplaintForm.css";
import { Layout, Tabs } from "antd";
import ComplaintActivity from "./ComplaintActivity/ComplaintActivity";
import ComplaintDetail from "./ComplaintDetail/ComplaintDetail";
const { TabPane } = Tabs;
const { Content } = Layout;

const onChange = (key) => {
  console.log(key);
};

const Complaint = () => {
  return (
    <Content
      className="background"
      style={{
        margin: "5px 10px",
        padding: "10px 20px",
        borderRadius: "10px",
      }}
    >
      <Tabs defaultActiveKey="2" onChange={onChange}>
        <TabPane tab="Activity History" key="1">
          <ComplaintActivity />
        </TabPane>
        <TabPane tab="Complaint Detail" key="2">
          <ComplaintDetail />
        </TabPane>
      </Tabs>
    </Content>
  );
};

export default Complaint;
