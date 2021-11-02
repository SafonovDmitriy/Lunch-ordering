import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: calc(100vh - 30px);
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
  align-items: ${({ mode }) => (mode ? "flex-end" : "flex-start")};
  background-color: ${({ mode }) => (mode ? "green" : "red")};
  transition: all 0.3s;
  animation: 0.03s ${({ mode }) => (mode ? "ball-move-up" : "ball-move-down")};
`;
const Ball = styled.div`
  height: 25px;
  width: 25px;
  border: solid 1px;
  border-radius: 25px;
  background-color: white;
`;
const AdminPage = ({ mode, setModeHendler }) => {
  console.log(`mode`, mode);
  return (
    <Container>
      <SwitchModeContainer>
        <SwitchMode mode={mode} onClick={setModeHendler}>
          <Ball />
        </SwitchMode>
      </SwitchModeContainer>
    </Container>
  );
};

export default AdminPage;
