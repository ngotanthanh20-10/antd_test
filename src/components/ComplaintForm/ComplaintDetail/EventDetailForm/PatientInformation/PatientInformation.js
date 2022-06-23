import React from "react";
import { Col, Row, Input, Form } from "antd";

import "../EventDetailForm.css";

const PatientInformation = () => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">Patient Information</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item className="formInputBasicInfo">
            Last Name
            <Input placeholder="BSC Reporter Information" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            Identifier
            <Input placeholder="BSC Reporter Information" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            Date of Birth
            <Input placeholder="BSC Reporter Information" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            Patient is Under 18?
            <Input placeholder="BSC Reporter Information" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item className="formInputBasicInfo">
            First Name
            <Input placeholder="Manager's Name" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            Gender
            <Input placeholder="Manager's Name" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            Age at Time of event
            <Input placeholder="Manager's Name" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            Weight (kg)
            <Input placeholder="Manager's Name" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default PatientInformation;
