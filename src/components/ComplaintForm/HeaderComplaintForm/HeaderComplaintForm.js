import React from "react";
import { Col, Row, Button } from "antd";

import "./HeaderComplaintForm.css";
import allIcon from "../../../img/index.js";

const { shareIcon } = allIcon;

const HeaderComplaintForm = () => {
  return (
    <div className="headerComplaintContainer">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className="col1InRowHeaderComplaintContainer"
        >
          <Button type="primary" className="buttonInHeaderComplaint">
            Product Return
          </Button>
          <Button
            type="primary"
            className="buttonInHeaderComplaint"
            disabled={true}
          >
            CRL
          </Button>
          <Button
            type="primary"
            className="buttonInHeaderComplaint"
            disabled={true}
          >
            GFE
          </Button>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className="col2InRowHeaderComplaintContainer"
        >
          <Button type="primary" className="buttonInHeaderComplaint">
            <img src={shareIcon} alt=""></img>
          </Button>
          <Button type="primary" className="buttonInHeaderComplaint">
            Copy Complaint
          </Button>
          <Button
            type="primary"
            className="buttonInHeaderComplaint"
            disabled={true}
          >
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderComplaintForm;
