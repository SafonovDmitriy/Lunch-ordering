import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { InformPanelAboutTime } from "../../components/InformPanelAboutTime";
import { LunchMenu } from "../../components/LunchMenu";
import { Button } from "../../components/UI/Button";
const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const HomePageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HomePageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  gap: 10px;
  height: min-content;
  justify-content: center;
  margin: 10px 0;
`;
const HomePage = ({ canselOrderHendler }) => (
  <>
    <HomePageWrapper>
      <HomePageHeader>
        <InformPanelAboutTime />
        <Button children="Cansel your order" onClick={canselOrderHendler} />
      </HomePageHeader>
      <HomePageBox>
        <LunchMenu />
      </HomePageBox>
    </HomePageWrapper>
  </>
);

HomePage.propTypes = {
  canselOrderHendler: PropTypes.func,
};
export default HomePage;
