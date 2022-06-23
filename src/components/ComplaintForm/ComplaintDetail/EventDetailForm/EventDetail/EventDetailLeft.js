import React from "react";
import { Input, Select, Form } from "antd";

import "../EventDetailForm.css";

const { Option } = Select;

const EventDetailLeft = () => {
  return (
    <>
      <Form.Item className="formInputBasicInfo">
        Event Description in Local Language
        <Input.TextArea
          placeholder="Event Description in Local Language"
          rows={5}
          className="textareaInputTag"
        />
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Physician's Comment
        <Input.TextArea
          placeholder="Physician's Comment"
          rows={5}
          className="textareaInputTag"
        />
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Type of Procedure
        <Input placeholder="Facility Name" />
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Diagnosis or Treatment?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Time of Event
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Patient Outcome
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Reprocessed/Resterilized?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Inspected prior to use
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item className="formInputBasicInfo">
        Infection Name
        <Input placeholder="State/Province" />
      </Form.Item>
    </>
  );
};

export default EventDetailLeft;
