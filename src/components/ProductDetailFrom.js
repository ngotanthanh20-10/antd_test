import React from "react";
import { Col, Row, Form, Input, Select } from "antd";
import "./LayoutApp.css";
const { Option } = Select;

const ProductDetailFrom = () => {
  return (
    <>
      <Form layout="vertical" autoComplete="off">
        <div
          style={{
            backgroundColor: "Azure",
            marginBottom: "20px",
            border: "1px solid #d3eded",
            borderRadius: "5px",
            padding: "10px 20px",
          }}
        >
          <div
            style={{
              color: "#1890ff",
              fontSize: "15px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            Product Information
          </div>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <div className="formInputBasicInfo">
                Search product by Name, UPN, Model, Catalog ...
                <Select
                  defaultValue="default"
                  style={{ width: "100%" }}
                  value={"bstar"}
                >
                  <Option value="bstar">bstar</Option>
                </Select>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div>
                <div className="formInputBasicInfo">
                  Model Number
                  <Input placeholder="" value={""} disabled={true} />
                </div>
                <div className="formInputBasicInfo">
                  Catalog Number
                  <Input
                    placeholder=""
                    value={"Bstar20255150"}
                    disabled={true}
                  />
                </div>
                <div className="formInputBasicInfo">
                  Serial Number
                  <Input
                    placeholder="Serial Number"
                    value={""}
                    disabled={false}
                  />
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
                  <Input
                    placeholder=""
                    value={"Bstar20255150"}
                    disabled={true}
                  />
                </div>
                <div className="formInputBasicInfo">
                  Batch/Lot Number
                  <Input placeholder="" value={""} disabled={false} />
                </div>
                <div className="formInputBasicInfo">
                  Product Name
                  <Input placeholder="" value={"bstar"} disabled={true} />
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
