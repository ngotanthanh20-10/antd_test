import React from "react";
import { Form } from "antd";
import moment from "moment";

import "./EventDetailForm.css";
import EventDetail from "./EventDetail/EventDetail";
import CardiovascularCaseData from "./CardiovascularCaseData/CardiovascularCaseData";
import PatientInformation from "./PatientInformation/PatientInformation";
import OtherProductInformation from "./OtherProductInformation/OtherProductInformation";

const dateFormat = "YYYY-MM-DD";

const EventDetailForm = ({ complaint }) => {
  if (complaint) {
    complaint.event_date =
      complaint.event_date && moment(complaint.event_date, dateFormat);
    complaint.procedure_date =
      complaint.procedure_date && moment(complaint.procedure_date, dateFormat);
  }
  console.log("as");
  // console.log(complaint);

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
