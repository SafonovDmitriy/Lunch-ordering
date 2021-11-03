import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
const SwitchModeContainer = styled.div`
  width: 50px;

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
const Switch = ({ mode, setModeHendler }) => {
  return (
    <SwitchModeContainer>
      <SwitchMode mode={mode.toString()} onClick={setModeHendler}>
        <Ball />
      </SwitchMode>
    </SwitchModeContainer>
  );
};
Switch.propTypes = {
  mode: PropTypes.bool,
  setModeHendler: PropTypes.func,
};
export default Switch;
