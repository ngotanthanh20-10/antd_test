import React from "react";
import "./LayoutApp.css";
import { Content } from "antd/lib/layout/layout";

const SiderLeft = () => {
  return (
    <Content
      className="background"
      style={{
        margin: "0px 10px",
        padding: "10px",
        borderRadius: "10px",
        height: "60%",
      }}
    >
      filter
    </Content>
  );
};

export default SiderLeft;
