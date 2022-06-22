import React from "react";
import { Col, Row, Form, Input, Select, DatePicker } from "antd";

import "./BasicInformationForm.css";

const { Option } = Select;

const BasicInfoFrom = ({ complaint }) => {
  return (
    <>
      <Form layout="vertical" autoComplete="off" initialValues={complaint}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="formInputBasicInfo">
              Complaint ID
              <Input
                placeholder="Complaint ID"
                value={complaint.complaint_id}
              />
            </div>
            <div className="formInputBasicInfo">
              J-POS/CIPI ID
              <Input
                placeholder="J-POS/CIPI ID"
                value={complaint.jpos_cipi_id}
              />
            </div>
            <div className="formInputBasicInfo">
              Related Complaint ID
              <Input
                placeholder="Related Complaint ID"
                value={complaint.related_complaint_id}
              />
            </div>
            <div className="formInputBasicInfo">
              OEM Reference Number
              <Input
                placeholder="OEM Reference Number"
                value={complaint.oem_reference_number}
              />
            </div>
            <div className="formInputBasicInfo">
              Country of Event
              <Select
                defaultValue="default"
                style={{ width: "100%" }}
                value={complaint.country_of_event}
              >
                <Option value="Vietnamese">Vietnamese</Option>
                <Option value="England">England</Option>
                <Option value="Japan">Japan</Option>
              </Select>
            </div>
            <div className="formInputBasicInfo">
              Event Description
              <Input.TextArea
                value={complaint.event_description}
                rows={4}
                style={{ marginTop: "5px" }}
              />
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
                value={complaint.bsc_aware_date}
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
                value={complaint.created_date}
              />
            </div>
            <div className="formInputBasicInfo">
              Message to QA
              <Input
                placeholder="Message to QA"
                value={complaint.message_to_qa}
              />
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <div>
              <div className="formInputBasicInfo">
                Business Division
                <Input
                  placeholder="Business Division"
                  value={complaint.bussiness_division}
                />
              </div>
              <div className="formInputBasicInfo">
                Complaint Assign to
                <Select
                  defaultValue="default"
                  style={{ width: "100%" }}
                  value={complaint.complaint_assign_to}
                >
                  <Option value="QC QA">QC QA</Option>
                  <Option value="SU">SU</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                Complaint Status
                <Select
                  defaultValue={complaint.complaint_status}
                  style={{
                    width: "100%",
                  }}
                  // value={complaint.complaint_status}
                >
                  <Option value="New">New</Option>
                  <Option value="Processing">Processing</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                CRL Requested?
                <Select
                  style={{ width: "100%" }}
                  defaultValue={complaint.crl_requested}
                >
                  <Option value="True">True</Option>
                  <Option value="False">False</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                Product Available for Return
                <Select
                  defaultValue={complaint.product_available_for_return}
                  style={{ width: "100%" }}
                >
                  <Option value="True">True</Option>
                  <Option value="False">False</Option>
                </Select>
              </div>
              <div className="formInputBasicInfo">
                Reason for NO Product Return
                <Input.TextArea
                  rows={4}
                  style={{ marginTop: "5px" }}
                  value={complaint.reason_for_no_product_return}
                />
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
                  value={complaint.complaint_reviewed_date}
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
                  value={complaint.oem_notification_date}
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
