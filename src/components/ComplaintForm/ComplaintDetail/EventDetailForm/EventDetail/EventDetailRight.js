import React from "react";
import { Input, Select, DatePicker, Form } from "antd";

import "../EventDetailForm.css";

const { Option } = Select;

const EventDetailRight = () => {
  return (
    <>
      <Form.Item className="formInputBasicInfo">
        Event Description in English
        <Input.TextArea rows={5} className="textareaInputTag" />
      </Form.Item>
      <Form.Item className="dateInputTag">
        Event Date
        <DatePicker
          placeholder="BSC Aware Date"
          className="datePickerInputTag"
        />
      </Form.Item>
      <Form.Item className="dateInputTag">
        Procedure Date
        <DatePicker
          placeholder="BSC Aware Date"
          className="datePickerInputTag"
        />
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Intended Use
        <Input placeholder="Facility SAP Code" />
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Anatomy Location
        <Input placeholder="CRL Send To" />
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Resolution
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Where did Event Occur?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        First time the unit was used?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Used Before Expiry Date?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
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
