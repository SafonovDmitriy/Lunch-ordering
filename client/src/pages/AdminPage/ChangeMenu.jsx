import React from "react";
import styled from "styled-components";
import { LunchMenu } from "../../components/LunchMenu";
const ChangeMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ChangeMenuBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1120px;
  justify-content: center;
  height: min-content;
`;
const ChangeMenu = () => {
  return (
    <ChangeMenuContainer>
      <ChangeMenuBox>
        <LunchMenu />
      </ChangeMenuBox>
    </ChangeMenuContainer>
  );
};

export default ChangeMenu;
