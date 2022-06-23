import React from "react";
import { Col, Row, Input, Form } from "antd";

import "./ReporterForm.css";

const InitialReporterInformation = () => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">
        Initial Reporter Information
      </div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="" className="formInputBasicInfo">
            Initial Reporter Title
            <Input placeholder="Facility Name" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="" className="formInputBasicInfo">
            Initial Reporter Name
            <Input placeholder="Initial Reporter Title" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default InitialReporterInformation;
