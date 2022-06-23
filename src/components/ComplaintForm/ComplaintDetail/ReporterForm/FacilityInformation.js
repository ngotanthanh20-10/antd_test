import React from "react";
import { Col, Row, Input } from "antd";

import "./ReporterForm.css";

const FacilityInformation = ({ complaint }) => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">Facility Information</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="formInputBasicInfo">
            Facility Name
            <Input placeholder="Facility Name" value={""} />
          </div>
          <div className="formInputBasicInfo">
            Physician's Name
            <Input placeholder="Physician's Name" value={""} />
          </div>
          <div className="formInputBasicInfo">
            State/Province
            <Input placeholder="State/Province" value={""} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="formInputBasicInfo">
            Physician's Department
            <Input placeholder="Physician's Department" value={""} />
          </div>
          <div className="formInputBasicInfo">
            Facility SAP Code
            <Input placeholder="Facility SAP Code" value={""} />
          </div>
          <div className="formInputBasicInfo">
            CRL Send To
            <Input placeholder="CRL Send To" value={""} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FacilityInformation;
