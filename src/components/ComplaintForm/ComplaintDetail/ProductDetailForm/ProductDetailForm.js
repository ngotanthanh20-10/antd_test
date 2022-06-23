import React from "react";
import { Col, Row, Form, Input } from "antd";
import "./ProductDetailForm.css";
import ProductInformation from "./ProductInformation";

const ProductDetailFrom = ({ product }) => {
  return (
    <>
      <Form layout="vertical" autoComplete="off" initialValues={product}>
        <ProductInformation product={product} />

        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="formInputBasicInfo">
              AR Code (Optional)
              <Input placeholder=" AR Code (Optional)" value={""} />
            </div>
            <div className="formInputBasicInfo">
              CMP #(Japan Only)
              <Input placeholder="CMP #(Japan Only)" value={""} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="formInputBasicInfo">
              Local Product Licence Number
              <Input placeholder="Local Product Licence Number" value={""} />
            </div>
            <div className="formInputBasicInfo">
              Quantify of Product Return
              <Input placeholder="Quantify of Product Return" value={""} />
            </div>
            <div className="formInputBasicInfo">
              OEM Requirement (Japan)
              <Input placeholder="OEM Requirement (Japan)" value={""} />
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ProductDetailFrom;
