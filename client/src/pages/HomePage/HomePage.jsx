import React from "react";
import styled from "styled-components";
import { LunchMenu } from "../../components/LunchMenu";

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const HomePageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1120px;
  height: min-content;
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
