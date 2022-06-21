import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Col, Row, Space, Dropdown, Input } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  ExportOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  FrownOutlined,
  BlockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";

import "./HeaderComplaint.css";

const { Content } = Layout;

const HeaderComplaint = ({ leftContent, setLeftContent }) => {
  const [users, setUsers] = useState([]);
  const [searchTextValue, setSearchTextValue] = useState("");

  const listInputSearch = [
    " Event Description",
    " OEM Supplier",
    " Complaint ID",
    " Complaint Name",
    " Product Name",
    " UPN",
  ];

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("http://10.0.106.27:3001/api/v1/users", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IlN1cGVyQWRtaW4iLCJpYXQiOjE2NTU3ODcyNzksImV4cCI6MTY1NTg1OTI3OX0.neh5xk6IPeURDn7SFNgjsf5vpJjjDBR7_IOlKhW6ewY`,
        },
      });
      setUsers(response.data.data);
    };
    loadUsers();
  }, []);
  const [filtered, setFiltered] = useState([]);

  const handleFilter = (e) => {
    const searchText = e.target.value;
    const newFilter = listInputSearch.filter((value) =>
      value.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(users);
    if (searchText === "") {
      setFiltered([]);
    } else {
      setFiltered(newFilter);
    }
    setSearchTextValue(searchText);
  };
  return (
    <Content className="headerComplaintContentBackground">
      <Row className="row1">
        <Col xs={10} sm={10} md={8} lg={6} className="col1_Row1">
          <Dropdown
            overlay={
              <Menu
                items={[
                  {
                    label: "My Complaint",
                    key: "1",
                    icon: <FrownOutlined className="sizeIconMenu" />,
                  },
                  {
                    label: "Product Return",
                    key: "2",
                    icon: <BlockOutlined className="sizeIconMenu" />,
                  },
                ]}
                style={{ borderRadius: "5px" }}
              />
            }
          >
            <Button className="buttonMyComplaint">
              <Space>
                My Complaint
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
        <Col xs={14} sm={14} md={16} lg={18} className="col2_Row1">
          <Row justify="center" className="row2">
            <Col flex="auto" className="col1_Row2">
              <Input
                size="middle"
                placeholder={`Search${listInputSearch}`}
                prefix={<SearchOutlined />}
                suffix={
                  <CloseCircleOutlined
                    onClick={() => {
                      setSearchTextValue("");
                      setFiltered([]);
                    }}
                  />
                }
                className="inputAutoComplete"
                onChange={handleFilter}
                value={searchTextValue}
              />
              {filtered.length !== 0 && (
                <div className="resultsAutoComplete">
                  {filtered.map((value, key) => (
                    <Button
                      type="link"
                      block
                      key={key}
                      className="buttonResultsAutoComplete"
                      onClick={() => {
                        setSearchTextValue(value);
                        setFiltered([]);
                      }}
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              )}
            </Col>

            <Col className="col2_Row2" flex="200px">
              <Button
                type="primary"
                icon={<ExportOutlined />}
                size="middle"
                className="buttonRightHeader"
              />
              <Button
                type="primary"
                size="middle"
                className="buttonRightHeader"
              >
                Copy Complaint
              </Button>
              <Button
                type="primary"
                icon={
                  leftContent ? <LeftSquareOutlined /> : <RightSquareOutlined />
                }
                size="middle"
                className="buttonRightHeader"
                onClick={() => setLeftContent(!leftContent)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default HeaderComplaint;
