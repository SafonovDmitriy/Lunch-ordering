import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { InformPanelAboutTime } from "../../components/InformPanelAboutTime";
import { LunchMenu } from "../../components/LunchMenu";
import { Button } from "../../components/UI/Button";
import { checkDeadlineTimes } from "../../helpers/checkDeadlineTimes";
import { canselSelectMenuAction } from "../../redux/actions/lunchMenuAction";
import { deadlineForOrderingSelector } from "../../redux/selectors";
import EndDeadlineTimesModal from "./EndDeadlineTimesModal";
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
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    bottom: 0;
    left: 0;
    right: 0;

    backdrop-filter: blur(5px);
    display: ${({ blur }) => (blur === "true" ? "" : "none")};
  }
`;
const HomePage = ({ isMenuOpen }) => {
  const dispatch = useDispatch();
  const deadlineForOrdering = useSelector(deadlineForOrderingSelector);

  const canselOrderHendler = () => {
    dispatch(canselSelectMenuAction());
  };
  const isEndDeadlineTimes = deadlineForOrdering
    ? checkDeadlineTimes(deadlineForOrdering)
    : false;
  const isBlur = !isMenuOpen || isEndDeadlineTimes;

  return (
    <>
      {isBlur && <EndDeadlineTimesModal />}
      <HomePageWrapper>
        <HomePageHeader>
          <InformPanelAboutTime />
          <Button children="Cansel your order" onClick={canselOrderHendler} />
        </HomePageHeader>
        <HomePageBox blur={isBlur.toString()}>
          <LunchMenu />
        </HomePageBox>
      </HomePageWrapper>
    </>
  );
};
HomePage.propTypes = {
  isMenuOpen: PropTypes.bool,
};
export default HomePage;
