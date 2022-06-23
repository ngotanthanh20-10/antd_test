import React from "react";
import { Col, Row, Input, Form } from "antd";

import "./ReporterForm.css";

const FacilityInformation = () => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">Facility Information</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="" className="formInputBasicInfo">
            Facility Name
            <Input placeholder="Facility Name" />
          </Form.Item>
          <Form.Item name="" className="formInputBasicInfo">
            Physician's Name
            <Input placeholder="Physician's Name" />
          </Form.Item>
          <Form.Item name="" className="formInputBasicInfo">
            State/Province
            <Input placeholder="State/Province" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="" className="formInputBasicInfo">
            Physician's Department
            <Input placeholder="Physician's Department" />
          </Form.Item>
          <Form.Item name="" className="formInputBasicInfo">
            Facility SAP Code
            <Input placeholder="Facility SAP Code" />
          </Form.Item>
          <Form.Item name="" className="formInputBasicInfo">
            CRL Send To
            <Input placeholder="CRL Send To" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default FacilityInformation;
