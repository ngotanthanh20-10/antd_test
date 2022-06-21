import React from "react";
import { Col, Row } from "antd";
import "./StaticHeader.css";

const StaticHeader = () => {
  return (
    <div className="staticHeaderContainer">
      <Row gutter={10}>
        <Col span={5}>
          <div className="staticHeaderBox">
            <h4 className="staticHeaderTitle">Complaint</h4>
            <span className="staticHeaderValue">19</span>
          </div>
        </Col>
        <Col span={5}>
          <div className="staticHeaderBox">
            <h4 className="staticHeaderTitle">Product Return</h4>
            <span className="staticHeaderValue">14</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StaticHeader;
