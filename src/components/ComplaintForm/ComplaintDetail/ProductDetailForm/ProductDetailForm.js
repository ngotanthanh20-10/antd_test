import React from "react";
import { Col, Row, Form, Input } from "antd";
import "./ProductDetailForm.css";
import ProductInformation from "./ProductInformation";

const ProductDetailFrom = ({ product }) => {
  return (
    <>
      <Form layout="vertical" autoComplete="off" initialValues={product}>
        <ProductInformation />
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item name="" className="formInputBasicInfo">
              AR Code (Optional)
              <Input placeholder="AR Code (Optional)" />
            </Form.Item>
            <Form.Item name="" className="formInputBasicInfo">
              CMP #(Japan Only)
              <Input placeholder="CMP #(Japan Only)" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item name="" className="formInputBasicInfo">
              Local Product Licence Number
              <Input placeholder="Local Product Licence Number" />
            </Form.Item>
            <Form.Item name="" className="formInputBasicInfo">
              Quantify of Product Return
              <Input placeholder="Quantify of Product Return" />
            </Form.Item>
            <Form.Item name="" className="formInputBasicInfo">
              OEM Requirement (Japan)
              <Input placeholder="OEM Requirement (Japan)" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ProductDetailFrom;
