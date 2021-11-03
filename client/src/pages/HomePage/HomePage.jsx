import React from "react";
import styled from "styled-components";
import { LunchMenu } from "../../components/LunchMenu";

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  box-sizing: border-box;
  margin: 20px;
  gap: 20px;
  flex-wrap: wrap;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <LunchMenu />
    </HomePageWrapper>
  );
};
export default HomePage;
