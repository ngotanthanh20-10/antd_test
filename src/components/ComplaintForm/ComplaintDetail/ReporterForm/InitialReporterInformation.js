import React from "react";
import { Col, Row, Input } from "antd";

import "./ReporterForm.css";

const InitialReporterInformation = ({ complaint }) => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">
        Initial Reporter Information
      </div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="formInputBasicInfo">
            Initial Reporter Title
            <Input placeholder="Facility Name" value={""} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="formInputBasicInfo">
            Initial Reporter Name
            <Input placeholder="Initial Reporter Title" value={""} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InitialReporterInformation;
