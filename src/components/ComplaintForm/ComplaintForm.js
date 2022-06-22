import React, { useEffect, useState } from "react";
import "./ComplaintForm.css";
import { Layout, Tabs } from "antd";
import axios from "axios";
import moment from "moment";

import ComplaintActivity from "./ComplaintActivity/ComplaintActivity";
import ComplaintDetail from "./ComplaintDetail/ComplaintDetail";

const { TabPane } = Tabs;
const { Content } = Layout;

const Author =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6IlFBIiwiaWF0IjoxNjU1ODY5MTIyLCJleHAiOjE2NTU5NDExMjJ9.o71NaEeqn36kE5le4eEQFVGTIUXTDOdKhBohJcC4bFI";
const dateFormat = "YYYY-MM-DD";

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState({});

  useEffect(() => {
    const loadComplaint = async () => {
      const response = await axios.get(
        "http://10.0.106.27:3001/api/v1/complaints/17",
        {
          headers: {
            Authorization: `Bearer ${Author}`,
          },
        }
      );
      setComplaint(response.data.data);
    };
    loadComplaint();
  }, []);

  if (complaint) {
    complaint.bsc_aware_date = moment(complaint.bsc_aware_date, dateFormat);
    complaint.complaint_reviewed_date = moment(
      complaint.complaint_reviewed_date,
      dateFormat
    );
    complaint.created_date = moment(complaint.created_date, dateFormat);
    complaint.oem_notification_date = moment(
      complaint.oem_notification_date,
      dateFormat
    );
  }

  const onChange = (key) => {
    // console.log(key);
  };
  const titleTab = (title) => {
    return <span className="titleTabPane">{title}</span>;
  };

  return (
    <Content className="contentTabs">
      <Tabs defaultActiveKey="2" onChange={onChange}>
        <TabPane tab={titleTab("Activity History")} key="1">
          <ComplaintActivity />
        </TabPane>
        <TabPane tab={titleTab("Complaint Detail")} key="2">
          <ComplaintDetail complaint={complaint} />
        </TabPane>
      </Tabs>
    </Content>
  );
};

export default ComplaintForm;
