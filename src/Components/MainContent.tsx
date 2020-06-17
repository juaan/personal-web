import React, { useState } from "react";
import styled from "styled-components";
import { Typography, Button } from "antd";
import ReactHtmlParser from "react-html-parser";

import SearchBar from "./SearchBar";
import ImageJuan from "../juan2.png";

const { Text } = Typography;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1c1c1c;
  min-height: 100vh;
  padding-top: 198px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ImageWrapper = styled.div`
  width: 111px;
  height: 111px;
  border-radius: 50%;
  border: 4px solid #583074;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      45deg,
      hsla(352, 96%, 45%, 1) 0%,
      hsla(352, 96%, 45%, 0) 70%
    ),
    linear-gradient(
      225deg,
      hsla(253, 95%, 42%, 1) 10%,
      hsla(253, 95%, 42%, 0) 80%
    ),
    linear-gradient(
      405deg,
      hsla(179, 91%, 45%, 1) 10%,
      hsla(179, 91%, 45%, 0) 80%
    );
`;

const TextStyled = styled(Text)`
  color: white;
  font-size: 30px;
  margin-bottom: 16px;
  font-family: "Concert One", cursive;
  margin-left: 24px;
  margin-right: 24px;
`;

const ButtonText = styled(Text)`
  font-family: "Metal Mania", cursive;
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 16px;
`;

const ContentWrapper = styled.div`
  width: 45%;
  min-width: 300px;
  margin-top: 16px;
  border-radius: 3px;
  padding: 16px 16px;
  border: 4px solid #333333;
  margin-left: 24px;
  margin-right: 24px;
  color: ghostwhite;
`;

const AvaliableContent = {
  help: {
    content:
      'available keyword: <strong>"help"</strong>, <strong>"contact"</strong>, <strong>"about juan"<strong/> or <strong>"cv"</strong>',
  },
  notfound: {
    content: "keyword not found",
  },
};

const MainContent = () => {
  const [searchResult, setSearchResult] = useState(null);

  const setSearchKeyword = (value) => {
    if (value in AvaliableContent) {
      setSearchResult(AvaliableContent[value]);
    } else if (!value) {
      setSearchResult(null);
    } else {
      setSearchResult(AvaliableContent.notfound);
    }
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={ImageJuan} alt="juan" style={{ width: "70px" }} />
      </ImageWrapper>
      <TextStyled>Anthony Juan Christian</TextStyled>
      <SearchBar setSearchKeyword={setSearchKeyword} />
      {searchResult ? (
        <ContentWrapper>{ReactHtmlParser(searchResult.content)}</ContentWrapper>
      ) : (
        <ButtonWrapper>
          <Button size="large">
            <ButtonText>I'm Feeling Lucky</ButtonText>
          </Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default MainContent;
