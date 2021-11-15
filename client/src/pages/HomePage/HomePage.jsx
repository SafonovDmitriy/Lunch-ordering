import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { InformPanelAboutTime } from "../../components/InformPanelAboutTime";
import { LunchMenu } from "../../components/LunchMenu";

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
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    backdrop-filter: blur(5px);
    display: ${({ isMenuOpen }) => (isMenuOpen === "true" ? "none" : "")};
  }
`;

const HomePage = ({ isMenuOpen }) => {
  return (
    <HomePageWrapper>
      <InformPanelAboutTime />
      <HomePageBox isMenuOpen={isMenuOpen.toString()}>
        <LunchMenu />
      </HomePageBox>
    </HomePageWrapper>
  );
};
HomePage.propTypes = {
  isMenuOpen: PropTypes.bool,
};
export default HomePage;
