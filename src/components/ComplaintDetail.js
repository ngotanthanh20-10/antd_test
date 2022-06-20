import React from "react";
import { Collapse } from "antd";
import BasicInfoFrom from "./BasicInfoFrom";
import ProductDetailFrom from "./ProductDetailFrom";
import ReporterFrom from "./ReporterFrom";
import EventDetail from "./EventDetail";
const { Panel } = Collapse;

const ComplaintDetail = () => {
  const headerPanel = (title) => {
    return (
      <span style={{ color: "#1890ff", fontSize: "15px", fontWeight: "500" }}>
        {title}
      </span>
    );
  };

  return (
    <div>
      <Collapse ghost expandIconPosition="end">
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Basic Information")}
          key="1"
        >
          <BasicInfoFrom />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Product Detail")}
          key="2"
        >
          <ProductDetailFrom />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Reporter")}
          key="3"
        >
          <ReporterFrom />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Event Detail")}
          key="4"
        >
          <EventDetail />
        </Panel>
      </Collapse>
    </div>
  );
};

export default ComplaintDetail;
