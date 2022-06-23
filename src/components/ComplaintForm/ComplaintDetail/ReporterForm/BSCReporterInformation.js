import React from "react";
import { Col, Row, Input } from "antd";

import "./ReporterForm.css";

const BSCReporterInformation = ({ complaint }) => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">BSC Reporter Information</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="formInputBasicInfo">
            BSC Reporter Information
            <Input placeholder="BSC Reporter Information" value={""} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="formInputBasicInfo">
            Manager's Name
            <Input placeholder="Manager's Name" value={""} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BSCReporterInformation;
