import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userBalanceSelector, userEmailSelector } from "../../redux/selectors";
import { NavigationMenu } from "../NavigationMenu";

const Header = () => {
  const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    padding: 0 15px;
    background-color: darkcyan;
  `;
  return (
    <HeaderWrapper>
      <NavigationMenu />
      <InformPanel />
    </HeaderWrapper>
  );
};
export default Header;
const InformPanel = () => {
  const InformPanelWrapper = styled.div`
    display: flex;
    gap: 15px;
    font-size: 14px;
    align-items: center;
  `;
  const balance = useSelector(userBalanceSelector);
  const email = useSelector(userEmailSelector);
  return (
    <InformPanelWrapper>
      <span>{`Balance: ${balance} грн`}</span>
      <span>{email}</span>
      <button>SignOut</button>
    </InformPanelWrapper>
  );
};
