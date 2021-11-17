import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LunchMenu } from "../../components/LunchMenu";
import { Button } from "../../components/UI/Button";
import { openMenuAction } from "../../redux/actions/adminAction";
import { menuFormedTodayAction } from "../../redux/actions/lunchMenuAction";
import { isMenuOpenSelector } from "../../redux/selectors";
import SelectDeadLineForOrder from "./SelectDeadLineForOrder";
const ChangeMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin: 15px 0;
`;
const ChangeMenuBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  gap: 10px;
  justify-content: center;
  height: min-content;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(3px);
    display: ${({ isMenuOpen }) => (isMenuOpen !== "true" ? "none" : "")};
  }
`;

const ChangeMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(isMenuOpenSelector);
  const saveMenuTodayHendler = () => {
    dispatch(openMenuAction());
  };
  useEffect(() => {
    dispatch(menuFormedTodayAction());
  }, [dispatch]);
  return (
    <ChangeMenuContainer>
      <SelectDeadLineForOrder />
      <ChangeMenuBox isMenuOpen={isMenuOpen.toString()}>
        <LunchMenu />
      </ChangeMenuBox>

      <Button
        children={"Save menu today"}
        padding="15px"
        onClick={saveMenuTodayHendler}
        disabled={!isMenuOpen}
      />
    </ChangeMenuContainer>
  );
};

export default ChangeMenu;
