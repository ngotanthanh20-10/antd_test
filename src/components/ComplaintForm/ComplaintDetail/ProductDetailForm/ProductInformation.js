import React from "react";
import { Col, Row, Input, Select } from "antd";
import "./ProductDetailForm.css";

const { Option } = Select;

const ProductInformation = ({ product }) => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">Product Information</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="formInputBasicInfo">
            Search product by Name, UPN, Model, Catalog ...
            <Select defaultValue={""} className="selectInputTag">
              <Option value="bstar">bstar</Option>
            </Select>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div>
            <div className="formInputBasicInfo">
              Model Number
              <Input
                placeholder="Model Number"
                defaultValue={""}
                disabled={true}
              />
            </div>
            <div className="formInputBasicInfo">
              Catalog Number
              <Input
                placeholder=""
                // defaultValue={product.catalog_number}
                disabled={true}
              />
            </div>
            <div className="formInputBasicInfo">
              Serial Number
              <Input placeholder="Serial Number" value={""} disabled={false} />
            </div>
            <div className="formInputBasicInfo">
              OEM Supplier's Name
              <Input placeholder="" value={""} disabled={true} />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div>
            <div className="formInputBasicInfo">
              UPN
              <Input placeholder="" value={"Bstar20255150"} disabled={true} />
            </div>
            <div className="formInputBasicInfo">
              Batch/Lot Number
              <Input placeholder="" value={""} disabled={false} />
            </div>
            <div className="formInputBasicInfo">
              Product Name
              <Input placeholder="" value={""} disabled={true} />
            </div>
            <div className="formInputBasicInfo">
              Japanese Product Name
              <Input placeholder="" value={"bstar"} disabled={true} />
            </div>
            <div className="formInputBasicInfo">
              Product Family
              <Input placeholder="" value={""} disabled={true} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductInformation;
