import React, { useState, useCallback } from "react";
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
  margin-bottom: 24px;
  border-radius: 3px;
  padding: 16px 16px;
  border: 4px solid #333333;
  margin-left: 24px;
  margin-right: 24px;
  color: ghostwhite;
`;

const AboutContent = "<ul><li>Hello, my name is Anthony Juan Christian or you can call me <strong>Juan</strong>.</li><li>Currently working remotely as  a Software Developer</li><li>I Love doing uncommon stuff and explore something unique.  </li><li>Passionate in Fashion, Plants, Games and Programming stuff, but kind of burn out with that too, idk... love hate relationship I guess 🤨.  </li><li>day by day always thinking about making something useful but somehow got distracted by works, games, or manga. I need to fix this 😭.</li></ul>"

const SwearingContent = 'did you kiss your mom with that mouth? 😡 <br> <a target="_blank" href="https://www.sehatq.com/artikel/cara-berbicara-yang-baik-untuk-hasilkan-komunikasi-efektif">mulut mu kotor</a>';

const AvaliableContent = {
  help: {
    content:
      "available keyword: <strong>'help'</strong>, <strong>'contact'</strong>, <strong>'about juan'<strong/>, <strong>'cv'</strong>, <string>'ping'</string> or just try it out, you might find something interesting 👀<br><br> <i>The 'I'm Feeling Lucky' button will lead you to unexpected content, curated with 💛 by me, to show the button again, just enter empty keyword and the button will show up</i>",
  },
  contact: {
    content: '📭: anthonyjuan95@gmail.com<br> 📍: Bekasi <br> 🐦: <a target="_blank" href="https://twitter.com/juancuks">https://twitter.com/juancuks</a> <br> 🖥: <a target="_blank" href="https://github.com/juaan">github.com/juaan</a>'
  },
  notfound: {
    content: 'keyword not found',
  },
  about: {
    content: AboutContent
  },
  'about me': {
    content: AboutContent
  },
  'about juan': {
    content: AboutContent
  },
  juan: {
    content: AboutContent
  },
  anjing: {
    content: SwearingContent
  },
  ping: {
    content: "<strong>pong 🏓</strong>"
  },
  kontol: {
    content: SwearingContent
  },
  bangsat: {
    content: SwearingContent
  },
  fuck: {
    content: SwearingContent
  },
  bitch: {
    content: SwearingContent
  },
  cv: {
    content: "<a href='/juan-cv.pdf' download><button>stomp me !</button></a> and the desired file will be in your download directory in blink of an eye"
  },
  'i love you': {
    content: "Thank you 🥰"
  }
};

const MainContent = () => {
  const [searchResult, setSearchResult] = useState(null);

  const setSearchKeyword = (value = '') => {
    const lowerCaseValue = value.toLocaleLowerCase()
    if (lowerCaseValue in AvaliableContent) {
      setSearchResult(AvaliableContent[lowerCaseValue]);
    } else if (!lowerCaseValue) {
      setSearchResult(null);
    } else {
      setSearchResult(AvaliableContent.notfound);
    }
  };

  const handleButtonClicked = useCallback(() => {
    const youtubeList = [
      "https://youtu.be/ZWibJrqY8R0",
      "https://youtu.be/-h5WrWncDZw",
      "https://youtu.be/JXeJANDKwDc",
      "https://youtu.be/115amzVdV44",
      "https://youtu.be/V1bFr2SWP1I"
    ]

    const theRandomNumber = Math.floor(Math.random() * 5);
    window.open(youtubeList[theRandomNumber], "_blank")
  }, [])
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
          <Button size="large" onClick={handleButtonClicked}>
            <ButtonText>I'm Feeling Lucky</ButtonText>
          </Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default MainContent;
