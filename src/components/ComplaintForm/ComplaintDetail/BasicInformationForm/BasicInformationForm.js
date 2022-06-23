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
            <Form.Item className="formInputBasicInfo">
              Complaint ID
              <Input
                placeholder="Complaint ID"
                value={complaint.complaint_id}
              />
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              J-POS/CIPI ID
              <Input
                placeholder="J-POS/CIPI ID"
                value={complaint.jpos_cipi_id}
              />
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              Related Complaint ID
              <Input
                placeholder="Related Complaint ID"
                value={complaint.related_complaint_id}
              />
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              OEM Reference Number
              <Input
                placeholder="OEM Reference Number"
                value={complaint.oem_reference_number}
              />
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              Country of Event
              <Select
                defaultValue={complaint.country_of_event}
                className="selectInputTag"
              >
                <Option value="Vietnamese">Vietnamese</Option>
                <Option value="England">England</Option>
                <Option value="Japan">Japan</Option>
              </Select>
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              Event Description
              <Input.TextArea
                value={complaint.event_description}
                rows={4}
                className="textareaInputTag"
              />
            </Form.Item>
            <Form.Item className="dateInputTag">
              BSC Aware Date
              <DatePicker
                placeholder="BSC Aware Date"
                className="datePickerInputTag"
                value={complaint.bsc_aware_date}
              />
            </Form.Item>
            <Form.Item className="dateInputTag">
              Create Date
              <DatePicker
                placeholder="Create Date"
                className="datePickerInputTag"
                value={complaint.created_date}
              />
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              Message to QA
              <Input
                placeholder="Message to QA"
                value={complaint.message_to_qa}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item className="formInputBasicInfo">
              Business Division
              <Input
                placeholder="Business Division"
                value={complaint.bussiness_division}
              />
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              Complaint Assign to
              <Select
                defaultValue={complaint.complaint_assign_to}
                className="selectInputTag"
              >
                <Option value="QC QA">QC QA</Option>
                <Option value="SU">SU</Option>
              </Select>
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              Complaint Status
              <Select
                defaultValue={complaint.complaint_status}
                className="selectInputTag"
              >
                <Option value="New">New</Option>
                <Option value="Processing">Processing</Option>
              </Select>
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              CRL Requested?
              <Select
                defaultValue={complaint.crl_requested}
                className="selectInputTag"
              >
                <Option value="true">True</Option>
                <Option value="false">False</Option>
              </Select>
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              Product Available for Return
              <Select
                defaultValue={complaint.product_available_for_return}
                className="selectInputTag"
              >
                <Option value="true">True</Option>
                <Option value="false">False</Option>
              </Select>
            </Form.Item>
            <Form.Item className="formInputBasicInfo">
              Reason for NO Product Return
              <Input.TextArea
                rows={4}
                className="textareaInputTag"
                value={complaint.reason_for_no_product_return}
              />
            </Form.Item>
            <Form.Item className="dateInputTag">
              Complaint Reviewed Date (Japan)
              <DatePicker
                placeholder="Complaint Reviewed Date (Japan)"
                className="datePickerInputTag"
                value={complaint.complaint_reviewed_date}
              />
            </Form.Item>
            <Form.Item className="dateInputTag">
              OEM Notification Date
              <DatePicker
                placeholder="OEM Notification Date"
                className="datePickerInputTag"
                value={complaint.oem_notification_date}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default BasicInfoFrom;
