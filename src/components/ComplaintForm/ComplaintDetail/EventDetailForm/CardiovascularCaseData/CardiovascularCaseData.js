import React from "react";
import { Col, Row, Input, Form } from "antd";

import "../EventDetailForm.css";

const CardiovascularCaseData = () => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">Cardiovascular case data</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item className="formInputBasicInfo">
            Tortuous severity
            <Input placeholder="Facility Name" value={""} />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            Calcification severity
            <Input placeholder="Facility Name" value={""} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item className="formInputBasicInfo">
            Percentage of stenosis
            <Input placeholder="Initial Reporter Title" value={""} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default CardiovascularCaseData;
