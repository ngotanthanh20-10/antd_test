import React, { useEffect, useState } from "react";
import { Col, Row, Form, Input, Select, DatePicker } from "antd";
import "./BasicInformationForm.css";
import axios from "axios";

const { Option } = Select;
const Author =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6IlFBIiwiaWF0IjoxNjU1ODA2ODgyLCJleHAiOjE2NTU4Nzg4ODJ9.akiLEQ95LXws4CuZvY2eCz6mM8IRK-hntm5Oe9Y8Dw8";

const BasicInfoFrom = () => {
  const [complaint, setComplaint] = useState([]);

  useEffect(() => {
    const loadComplaint = async () => {
      const response = await axios.get(
        "http://10.0.106.27:3001/api/v1/complaints/16",
        {
          headers: {
            Authorization: `Bearer ${Author}`,
          },
        }
      );
      setComplaint(response.data.data);
    };
    loadComplaint();
  }, []);

  console.log(complaint);
  return (
    <>
      <Form layout="vertical" autoComplete="off">
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div>
              <div className="formInputBasicInfo">
                Complaint ID
                <Input placeholder="Complaint ID" />
              </div>
              <div className="formInputBasicInfo">
                J-POS/CIPI ID
                <Input placeholder="Complaint ID" />
              </div>
              <div className="formInputBasicInfo">
                Related Complaint ID
                <Input placeholder="Complaint ID" />
              </div>
              <div className="formInputBasicInfo">
                OEM Reference Number
                <Input placeholder="Complaint ID" />
              </div>
              <div className="formInputBasicInfo">
                Country of Event
                <Select
                  defaultValue="default"
                  style={{ width: "100%" }}
                  value={"none"}
                >
                  <Option value="jack">Japan</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                Event Description
                <Input.TextArea rows={4} style={{ marginTop: "5px" }} />
              </div>
              <div style={{ marginBottom: "15px" }}>
                BSC Aware Date
                <DatePicker
                  placeholder="BSC Aware Date"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    height: "35px",
                    marginTop: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                Create Date
                <DatePicker
                  placeholder="Create Date"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    height: "35px",
                    marginTop: "5px",
                  }}
                />
              </div>
              <div className="formInputBasicInfo">
                Message to QA
                <Input placeholder="Complaint ID" />
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <div>
              <div className="formInputBasicInfo">
                Business Division
                <Input placeholder="Complaint ID" />
              </div>
              <div className="formInputBasicInfo">
                Complaint Assign to
                <Select
                  defaultValue="default"
                  style={{ width: "100%" }}
                  value={"none"}
                >
                  <Option value="QA">QA</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                Complaint Status
                <Select
                  defaultValue="default"
                  style={{
                    width: "100%",
                  }}
                  value={"none"}
                >
                  <Option value="processing">Processing</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                CRL Requested?
                <Select
                  defaultValue="default"
                  style={{ width: "100%" }}
                  value="yes"
                >
                  <Option value="yes">Yes</Option>
                  <Option value="no">No</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                Product Available for Return
                <Select
                  defaultValue="default"
                  style={{ width: "100%" }}
                  value="yes"
                >
                  <Option value="yes">Yes</Option>
                  <Option value="no">No</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                Reason for NO Product Return
                <Input.TextArea rows={4} style={{ marginTop: "5px" }} />
              </div>
              <div style={{ marginBottom: "15px" }}>
                Complaint Reviewed Date (Japan)
                <DatePicker
                  placeholder="Complaint Reviewed Date (Japan)"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    height: "35px",
                    marginTop: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                OEM Notification Date
                <DatePicker
                  placeholder="OEM Notification Date"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    height: "35px",
                    marginTop: "5px",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default BasicInfoFrom;
