import React from "react";
import { Col, Row, Input, Select, Form } from "antd";
import "./ProductDetailForm.css";

const { Option } = Select;

const ProductInformation = () => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">Product Information</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item className="formInputBasicInfo">
            Search product by Name, UPN, Model, Catalog ...
            <Select className="selectInputTag">
              <Option value="bstar">bstar</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="model_number" className="formInputBasicInfo">
            Model Number
            <Input placeholder="Model Number" disabled={true} />
          </Form.Item>
          <Form.Item name="catalog_number" className="formInputBasicInfo">
            Catalog Number
            <Input placeholder="Catalog Number" disabled={true} />
          </Form.Item>
          <Form.Item name="serial_number" className="formInputBasicInfo">
            Serial Number
            <Input placeholder="Serial Number" disabled={false} />
          </Form.Item>
          <Form.Item name="oem" className="formInputBasicInfo">
            OEM Supplier's Name
            <Input placeholder="OEM Supplier's Name" disabled={true} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="upn" className="formInputBasicInfo">
            UPN
            <Input placeholder="UPN" disabled={true} />
          </Form.Item>
          <Form.Item name="batch" className="formInputBasicInfo">
            Batch/Lot Number
            <Input placeholder="Batch/Lot Number" disabled={false} />
          </Form.Item>
          <Form.Item name="product_name" className="formInputBasicInfo">
            Product Name
            <Input placeholder="Product Name" disabled={true} />
          </Form.Item>
          <Form.Item name="product_name_jp" className="formInputBasicInfo">
            Japanese Product Name
            <Input placeholder="Japanese Product Name" disabled={true} />
          </Form.Item>
          <Form.Item name="product_family" className="formInputBasicInfo">
            Product Family
            <Input placeholder="Product Family" disabled={true} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default ProductInformation;
