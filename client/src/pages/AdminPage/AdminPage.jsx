import React from "react";
import styled from "styled-components";
import { LunchMenu } from "../../components/LunchMenu";
const Container = styled.div`
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const SwitchModeContainer = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SwitchMode = styled.div`
  height: 70px;
  width: 35px;
  border: solid 1px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 2px 0;
  align-items: ${({ mode }) => (mode === "true" ? "flex-end" : "flex-start")};
  background-color: ${({ mode }) => (mode === "true" ? "green" : "red")};
  transition: all 0.3s;
  animation: 0.03s
    ${({ mode }) => (mode === "true" ? "ball-move-up" : "ball-move-down")};
`;
const Ball = styled.div`
  height: 25px;
  width: 25px;
  border: solid 1px;
  border-radius: 25px;
  background-color: white;
`;
const ChangeMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ChangeUserBalanceContainer = styled.div``;
const AdminPage = ({ mode, setModeHendler }) => {
  console.log(`AdminPage`);
  return (
    <Container>
      <SwitchModeContainer>
        <SwitchMode mode={mode.toString()} onClick={setModeHendler}>
          <Ball />
        </SwitchMode>
      </SwitchModeContainer>
      {mode ? (
        <ChangeUserBalanceContainer>312</ChangeUserBalanceContainer>
      ) : (
        <ChangeMenuContainer>
          <LunchMenu />
        </ChangeMenuContainer>
      )}
    </Container>
  );
};

export default AdminPage;
