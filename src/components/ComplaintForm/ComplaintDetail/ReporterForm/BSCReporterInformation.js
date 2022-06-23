import React from "react";
import { Col, Row, Input, Form } from "antd";

import "./ReporterForm.css";

const BSCReporterInformation = () => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">BSC Reporter Information</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="" className="formInputBasicInfo">
            BSC Reporter Information
            <Input placeholder="BSC Reporter Information" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="" className="formInputBasicInfo">
            Manager's Name
            <Input placeholder="Manager's Name" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default BSCReporterInformation;
