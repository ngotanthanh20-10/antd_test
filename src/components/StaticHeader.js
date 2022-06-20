import React from "react";
import { Col, Row } from "antd";

const StaticHeader = () => {
  return (
    <div
      style={{
        width: "1200px",
        padding: "0px 10px",
      }}
    >
      <Row gutter={10}>
        <Col span={5}>
          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "LightSeaGreen",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: "20px", color: "white", width: "100px" }}>
              Complaint
            </h4>
            <span
              style={{
                color: "white",
                fontSize: "25px",
                marginRight: "20px",
                marginLeft: "50px",
              }}
            >
              19
            </span>
          </div>
        </Col>
        <Col span={5}>
          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "LightSeaGreen",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: "20px", color: "white", width: "100px" }}>
              Product Return
            </h4>
            <span
              style={{
                color: "white",
                fontSize: "25px",
                marginRight: "20px",
                marginLeft: "50px",
              }}
            >
              14
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StaticHeader;
