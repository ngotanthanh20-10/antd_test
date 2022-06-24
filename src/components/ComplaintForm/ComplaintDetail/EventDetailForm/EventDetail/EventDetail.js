import React from "react";
import { Col, Row } from "antd";

import "../EventDetailForm.css";
import EventDetailLeft from "./EventDetailLeft";
import EventDetailRight from "./EventDetailRight";

const EventDetail = () => {
  return (
    <div className="formProductInformation">
      <div className="titleProductInformation">Event Detail</div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <EventDetailLeft />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <EventDetailRight />
        </Col>
      </Row>
    </div>
  );
};

export default EventDetail;
