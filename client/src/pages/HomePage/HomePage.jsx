import React from "react";
import styled from "styled-components";
import { LunchMenu } from "../../components/LunchMenu";
import { InformPanelAboutTime } from "../../components/InformPanelAboutTime";

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HomePageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1120px;
  height: min-content;
  justify-content: center;
  margin: 10px 0;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <InformPanelAboutTime />
      <HomePageBox>
        <LunchMenu />
      </HomePageBox>
    </HomePageWrapper>
  );
};
export default HomePage;
