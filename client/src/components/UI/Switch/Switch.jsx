import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
const SwitchModeContainer = styled.div`
  width: 50px;
  position: relative;
`;
const SwitchMode = styled.div`
  height: 70px;
  width: 35px;
  border: solid 1px;
  border-radius: 25px;
  box-sizing: border-box;
  padding: 2px 0;
  background-color: ${({ switchMode }) =>
    switchMode === "true" ? "green" : "red"};
  transition: all 0.3s;
  position: fixed;
  top: 50%;
  left: 5px;
`;
const Ball = styled.div`
  height: 25px;
  width: 25px;
  border: solid 1px;
  border-radius: 25px;
  background-color: white;
  position: absolute;
  left: 3px;
  animation: 0.03s
    ${({ switchMode }) =>
      switchMode === "true" ? "ball-move-up" : "ball-move-down"};
  top: ${({ switchMode }) => (switchMode === "true" ? "3%" : "57%")}; ;
`;
const Switch = ({ switchMode, setModeHendler }) => {
  return (
    <SwitchModeContainer>
      <SwitchMode mode={switchMode.toString()} onClick={setModeHendler}>
        <Ball mode={switchMode.toString()} />
      </SwitchMode>
    </SwitchModeContainer>
  );
};
Switch.propTypes = {
  switchMode: PropTypes.bool,
  setModeHendler: PropTypes.func,
};
export default Switch;
