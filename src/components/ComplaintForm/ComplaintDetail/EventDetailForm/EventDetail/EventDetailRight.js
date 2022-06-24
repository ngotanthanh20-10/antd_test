import React from "react";
import { Input, Select, DatePicker, Form } from "antd";

import "../EventDetailForm.css";

const { Option } = Select;

const EventDetailRight = () => {
  return (
    <>
      <Form.Item
        name="event_description_in_english"
        className="formInputBasicInfo"
      >
        Event Description in English
        <Input.TextArea
          placeholder="Event Description in English"
          rows={5}
          className="textareaInputTag"
        />
      </Form.Item>
      <Form.Item name="event_date" className="dateInputTag">
        Event Date
        <DatePicker
          placeholder="BSC Aware Date"
          className="datePickerInputTag"
        />
      </Form.Item>
      <Form.Item name="procedure_date" className="dateInputTag">
        Procedure Date
        <DatePicker
          placeholder="BSC Aware Date"
          className="datePickerInputTag"
        />
      </Form.Item>
      <Form.Item name="intended_use" className="formInputBasicInfo">
        Intended Use
        <Input placeholder="Facility SAP Code" />
      </Form.Item>
      <Form.Item name="anatomy_location" className="formInputBasicInfo">
        Anatomy Location
        <Input placeholder="CRL Send To" />
      </Form.Item>
      <Form.Item name="resolution" className="formInputBasicInfo">
        Resolution
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="where_did_event_occur" className="formInputBasicInfo">
        Where did Event Occur?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="first_time_unit_used" className="formInputBasicInfo">
        First time the unit was used?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="used_before_expiry_date" className="formInputBasicInfo">
        Used Before Expiry Date?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="infectious_product" className="formInputBasicInfo">
        Infectious Product?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
    </>
  );
};

export default EventDetailRight;
