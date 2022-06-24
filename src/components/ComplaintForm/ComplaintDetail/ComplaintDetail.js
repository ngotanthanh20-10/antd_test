import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import axios from "axios";

import "./ComplaintDetail.css";
import BasicInformationForm from "./BasicInformationForm/BasicInformationForm";
import ProductDetailForm from "./ProductDetailForm/ProductDetailForm";
import ReporterForm from "./ReporterForm/ReporterForm";
import EventDetailForm from "./EventDetailForm/EventDetailForm";

const { Panel } = Collapse;
const Author =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6IlFBIiwiaWF0IjoxNjU1OTY4MTg2LCJleHAiOjE2NTY2ODgxODZ9.oyHY8BSG4dhLLTcW9YNxRjJwdMFNa6vGV15dRNwKDfE";

const complaint_id = 1;
const product_id = 123;

const ComplaintDetail = () => {
  const [complaint, setComplaint] = useState({});
  const [product, setProduct] = useState({});

  useEffect(() => {
    const loadComplaint = async () => {
      const response = await axios.get(
        `http://10.0.106.27:3001/api/v1/complaints/${complaint_id}`,
        {
          headers: {
            Authorization: `Bearer ${Author}`,
          },
        }
      );
      setComplaint(response.data.data);
    };
    loadComplaint();
  }, []);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await axios.get(
        `http://10.0.106.27:3001/api/v1/products/${product_id}`,
        {
          headers: {
            Authorization: `Bearer ${Author}`,
          },
        }
      );
      setProduct(response.data.data);
    };
    loadProduct();
  }, []);
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
          <BasicInformationForm complaint={complaint} />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Product Detail")}
          key="2"
        >
          <ProductDetailForm complaint={product} />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Reporter")}
          key="3"
        >
          <ReporterForm complaint={complaint} />
        </Panel>
        <Panel
          className="titleCollapsePanel"
          header={headerPanel("Event Detail")}
          key="4"
        >
          <EventDetailForm complaint={complaint} />
        </Panel>
      </Collapse>
    </div>
  );
};

export default ComplaintDetail;
