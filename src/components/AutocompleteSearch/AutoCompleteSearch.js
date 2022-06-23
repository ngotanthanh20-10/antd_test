import React, { useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";

import "./AutoCompleteSearch.css";

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
        className="searchInputTag"
        onChange={handleFilter}
        value={searchTextValue}
      />
      {filtered.length !== 0 && (
        <div className="resultsSearchInput">
          {filtered.slice(0, 10).map((value, key) => (
            <Button
              block
              key={key}
              className="contentResultsSearchInput"
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
