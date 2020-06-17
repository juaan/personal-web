import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const SearchWrapper = styled.div`
  width: 45%;
  min-width: 300px;
  margin-top: 8px;
  border-radius: 5px;
  background-color: #333333;
  margin-left: 24px;
  margin-right: 24px;
`;

const { Search } = Input;
const StyledSearch = styled(Search)`
  background-color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;

  .ant-input-search-icon {
    color: ghostwhite;
  }

  .ant-input-affix-wrapper-lg {
    font-size: 24px;
  }

  .ant-input {
    background-color: #333333;
    color: ghostwhite;
  }

  .ant-input-search-icon::before {
    border: none;
  }
`;

interface SearchBarProps {
  setSearchKeyword: (value: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <SearchWrapper>
      <StyledSearch
        placeholder={`Try typing "help"`}
        size="large"
        onSearch={props.setSearchKeyword}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
