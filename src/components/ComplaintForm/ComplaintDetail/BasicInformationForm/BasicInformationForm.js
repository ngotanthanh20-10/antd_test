import React from "react";
import { Col, Row, Form, Input, Select, DatePicker } from "antd";
import moment from "moment";

import "./BasicInformationForm.css";

const { Option } = Select;
const dateFormat = "YYYY-MM-DD";

const BasicInformationForm = ({ complaint }) => {
  if (complaint) {
    complaint.bsc_aware_date =
      complaint.bsc_aware_date && moment(complaint.bsc_aware_date, dateFormat);
    complaint.complaint_reviewed_date =
      complaint.complaint_reviewed_date &&
      moment(complaint.complaint_reviewed_date, dateFormat);
    complaint.created_date =
      complaint.created_date && moment(complaint.created_date, dateFormat);
    complaint.oem_notification_date =
      complaint.oem_notification_date &&
      moment(complaint.oem_notification_date, dateFormat);
  }
  return (
    <>
      {complaint && (
        <Form layout="vertical" autoComplete="off" initialValues={complaint}>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item name="complaint_id" className="formInputBasicInfo">
                Complaint ID
                <Input placeholder="Complaint ID" />
              </Form.Item>
              <Form.Item name="jpos_cipi_id" className="formInputBasicInfo">
                J-POS/CIPI ID
                <Input placeholder="J-POS/CIPI ID" />
              </Form.Item>
              <Form.Item
                name="related_complaint_id"
                className="formInputBasicInfo"
              >
                Related Complaint ID
                <Input placeholder="Related Complaint ID" />
              </Form.Item>
              <Form.Item
                name="oem_reference_number"
                className="formInputBasicInfo"
              >
                OEM Reference Number
                <Input placeholder="OEM Reference Number" />
              </Form.Item>
              <Form.Item name="country_of_event" className="formInputBasicInfo">
                Country of Event
                <Select className="selectInputTag">
                  <Option value="Vietnamese">Vietnamese</Option>
                  <Option value="England">England</Option>
                  <Option value="Japan">Japan</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="event_description"
                className="formInputBasicInfo"
              >
                Event Description
                <Input.TextArea rows={5} className="textareaInputTag" />
              </Form.Item>
              <Form.Item name="bsc_aware_date" className="dateInputTag">
                BSC Aware Date
                <DatePicker
                  placeholder="BSC Aware Date"
                  className="datePickerInputTag"
                />
              </Form.Item>
              <Form.Item name="created_date" className="dateInputTag">
                Create Date
                <DatePicker
                  placeholder="Create Date"
                  className="datePickerInputTag"
                />
              </Form.Item>
              <Form.Item name="message_to_qa" className="formInputBasicInfo">
                Message to QA
                <Input placeholder="Message to QA" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                name="bussiness_division"
                className="formInputBasicInfo"
              >
                Business Division
                <Input placeholder="Business Division" />
              </Form.Item>
              <Form.Item
                name="complaint_assign_to"
                className="formInputBasicInfo"
              >
                Complaint Assign to
                <Select className="selectInputTag">
                  <Option value="QC QA">QC QA</Option>
                  <Option value="SU">SU</Option>
                </Select>
              </Form.Item>
              <Form.Item name="complaint_status" className="formInputBasicInfo">
                Complaint Status
                <Select className="selectInputTag">
                  <Option value="New">New</Option>
                  <Option value="Processing">Processing</Option>
                </Select>
              </Form.Item>
              <Form.Item name="crl_requested" className="formInputBasicInfo">
                CRL Requested?
                <Select className="selectInputTag">
                  <Option value="true">True</Option>
                  <Option value="false">False</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="product_available_for_return"
                className="formInputBasicInfo"
              >
                Product Available for Return
                <Select className="selectInputTag">
                  <Option value="true">True</Option>
                  <Option value="false">False</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="reason_for_no_product_return"
                className="formInputBasicInfo"
              >
                Reason for NO Product Return
                <Input.TextArea rows={5} className="textareaInputTag" />
              </Form.Item>
              <Form.Item
                name="complaint_reviewed_date"
                className="dateInputTag"
              >
                Complaint Reviewed Date (Japan)
                <DatePicker
                  placeholder="Complaint Reviewed Date (Japan)"
                  className="datePickerInputTag"
                />
              </Form.Item>
              <Form.Item name="oem_notification_date" className="dateInputTag">
                OEM Notification Date
                <DatePicker
                  placeholder="OEM Notification Date"
                  className="datePickerInputTag"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
};

export default BasicInformationForm;
