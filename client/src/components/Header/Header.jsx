import React from "react";
import styled from "styled-components";
import InformPanel from "../InformPanel/InformPanel";
import { NavigationMenu } from "../NavigationMenu";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  padding: 0 15px;
  background-color: darkcyan;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavigationMenu />
      <InformPanel />
    </HeaderWrapper>
  );
};
export default Header;
