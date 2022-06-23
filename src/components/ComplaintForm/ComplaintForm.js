import React from "react";
import "./ComplaintForm.css";
import { Layout, Tabs, Button } from "antd";

import ComplaintActivity from "./ComplaintActivity/ComplaintActivity";
import ComplaintDetail from "./ComplaintDetail/ComplaintDetail";

const { TabPane } = Tabs;
const { Content } = Layout;

const ComplaintForm = () => {
  const onChange = (key) => {
    // console.log(key);
  };
  const titleTab = (title) => {
    return <span className="titleTabPane">{title}</span>;
  };

  return (
    <Content className="contentTabs">
      <Tabs
        defaultActiveKey="2"
        onChange={onChange}
        tabBarExtraContent={<Button type="primary">Product Return</Button>}
      >
        <TabPane tab={titleTab("Activity History")} key="1">
          <ComplaintActivity />
        </TabPane>
        <TabPane tab={titleTab("Complaint Detail")} key="2">
          <ComplaintDetail />
        </TabPane>
      </Tabs>
    </Content>
  );
};

export default ComplaintForm;
