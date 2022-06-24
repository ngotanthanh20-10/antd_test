import React from "react";
import { Input, Select, Form } from "antd";

import "../EventDetailForm.css";

const { Option } = Select;

const EventDetailLeft = () => {
  return (
    <>
      <Form.Item
        name="event_description_in_local_language"
        className="formInputBasicInfo"
      >
        Event Description in Local Language
        <Input.TextArea
          placeholder="Event Description in Local Language"
          rows={5}
          className="textareaInputTag"
        />
      </Form.Item>
      <Form.Item name="physician_comment" className="formInputBasicInfo">
        Physician's Comment
        <Input.TextArea
          placeholder="Physician's Comment"
          rows={5}
          className="textareaInputTag"
        />
      </Form.Item>
      <Form.Item name="type_of_procedure" className="formInputBasicInfo">
        Type of Procedure
        <Input placeholder="Facility Name" />
      </Form.Item>
      <Form.Item name="diagnosis_or_treatment" className="formInputBasicInfo">
        Diagnosis or Treatment?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="time_of_event" className="formInputBasicInfo">
        Time of Event
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="patient_outcome" className="formInputBasicInfo">
        Patient Outcome
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="reprocessed_or_resterilized"
        className="formInputBasicInfo"
      >
        Reprocessed/Resterilized?
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="inspected_prior_to_use" className="formInputBasicInfo">
        Inspected prior to use
        <Select default className="selectInputTag">
          <Option value="Vietnamese">Vietnamese</Option>
          <Option value="England">England</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="infection_name" className="formInputBasicInfo">
        Infection Name
        <Input placeholder="State/Province" />
      </Form.Item>
    </>
  );
};

export default EventDetailLeft;
