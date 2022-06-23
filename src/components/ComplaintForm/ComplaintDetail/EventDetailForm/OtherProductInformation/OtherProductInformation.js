import React from "react";
import { Col, Row, Input, Form } from "antd";

import "../EventDetailForm.css";

const OtherProductInformation = () => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">Other Product Information</div>
      <Row gutter={16}>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="titleOtherProduct">Product Type</div>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 1" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 2" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 3" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 4" />
          </Form.Item>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="titleOtherProduct">Other Product used</div>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 1" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 2" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 3" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 4" />
          </Form.Item>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="titleOtherProduct">Name of Product</div>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 1" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 2" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 3" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 4" />
          </Form.Item>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="titleOtherProduct">Status of Use</div>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 1" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 2" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 3" />
          </Form.Item>
          <Form.Item className="formInputBasicInfo">
            <Input placeholder="Status of Use 4" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default OtherProductInformation;
