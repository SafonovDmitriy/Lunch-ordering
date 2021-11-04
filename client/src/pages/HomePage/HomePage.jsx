import React from "react";
import styled from "styled-components";
import { LunchMenu } from "../../components/LunchMenu";

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const HomePageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1120px;
  height: min-content;
  justify-content: center;
  margin: auto 0;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomePageBox>
        <LunchMenu />
      </HomePageBox>
    </HomePageWrapper>
  );
};
export default HomePage;
