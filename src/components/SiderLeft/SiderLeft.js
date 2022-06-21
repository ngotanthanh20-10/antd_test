import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

const SiderLeft = () => {
  return (
    <>
      <div
        style={{
          borderRadius: "5px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          margin: "0px 10px 10px",
          padding: "10px",
        }}
      >
        <h4
          style={{
            margin: "20px",
            color: "blue",
            width: "100px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Filters
        </h4>
      </div>
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
    </>
  );
};

export default SiderLeft;
