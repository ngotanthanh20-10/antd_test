import React, { useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";

const AutoCompleteSearch = ({ data }) => {
  const [filtered, setFiltered] = useState([]);
  const [searchTextValue, setSearchTextValue] = useState("");

  const handleFilter = (e) => {
    const searchText = e.target.value;
    const newFilter = data.filter((value) =>
      value.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setFiltered([]);
    else setFiltered(newFilter);
    setSearchTextValue(searchText);
  };

  return (
    <>
      <Input
        size="middle"
        placeholder={`Search${data}`}
        prefix={<SearchOutlined />}
        suffix={
          <CloseCircleOutlined
            onClick={() => {
              setSearchTextValue("");
              setFiltered([]);
            }}
          />
        }
        style={{ borderRadius: "10px" }}
        onChange={handleFilter}
        value={searchTextValue}
      />
      {filtered.length !== 0 && (
        <div
          style={{
            marginTop: "10px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid gray",
            padding: "10px",
            zIndex: "1",
            backgroundColor: "white",
            position: "absolute",
          }}
        >
          {filtered.slice(0, 10).map((value, key) => (
            <Button
              block
              key={key}
              style={{
                width: "100%",
                cursor: "pointer",
                margin: "2px 0px",
              }}
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
    </>
  );
};

export default AutoCompleteSearch;
