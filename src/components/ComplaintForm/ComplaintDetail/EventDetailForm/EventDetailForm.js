import React from "react";
import { Form } from "antd";

import "./EventDetailForm.css";
import EventDetail from "./EventDetail/EventDetail";
import CardiovascularCaseData from "./CardiovascularCaseData/CardiovascularCaseData";
import PatientInformation from "./PatientInformation/PatientInformation";
import OtherProductInformation from "./OtherProductInformation/OtherProductInformation";

const EventDetailForm = ({ complaint }) => {
  return (
    <>
      <Form layout="vertical" autoComplete="off" initialValues={complaint}>
        <EventDetail />
        <CardiovascularCaseData />
        <PatientInformation />
        <OtherProductInformation />
      </Form>
    </>
  );
};

export default EventDetailForm;
