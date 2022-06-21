import React from "react";
import { Collapse } from "antd";

import "./ComplaintDetail.css";
import BasicInformationForm from "./BasicInformationForm/BasicInformationForm";
import ProductDetailForm from "./ProductDetailForm/ProductDetailForm";
import ReporterForm from "./ReporterForm/ReporterForm";
import EventDetailForm from "./EventDetailForm/EventDetailForm";

const { Panel } = Collapse;

const ComplaintDetail = () => {
  const headerPanel = (title) => {
    return <span className="headerPanelTitle">{title}</span>;
  };

  return (
    <div>
      <Collapse ghost expandIconPosition="end">
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Basic Information")}
          key="1"
        >
          <BasicInformationForm />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Product Detail")}
          key="2"
        >
          <ProductDetailForm />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Reporter")}
          key="3"
        >
          <ReporterForm />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Event Detail")}
          key="4"
        >
          <EventDetailForm />
        </Panel>
      </Collapse>
    </div>
  );
};

export default ComplaintDetail;
