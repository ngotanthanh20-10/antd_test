import React from "react";
import { Form } from "antd";

import "./ReporterForm.css";
import FacilityInformation from "./FacilityInformation";
import InitialReporterInformation from "./InitialReporterInformation";
import BSCReporterInformation from "./BSCReporterInformation";

const ReporterForm = ({ complaint }) => {
  return (
    <>
      <Form layout="vertical" autoComplete="off" initialValues={complaint}>
        <FacilityInformation complaint={complaint} />
        <InitialReporterInformation complaint={complaint} />
        <BSCReporterInformation complaint={complaint} />
      </Form>
    </>
  );
};

export default ReporterForm;
