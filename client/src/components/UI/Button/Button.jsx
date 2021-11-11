import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 16px;
  display: flex;

  ${({ padding }) => (padding ? "padding:" + padding : "")};
  color: #7a8a88;
  border-radius: 8px;
  align-items: center;
  box-shadow: 2px 2px 4px 1px;
  transition: all 0.1s;
  border: none;
  &:hover {
    background-color: #dcdcdc;
    color: #2b2b2b;
  }
  &:active {
    box-shadow: 0px 0px;
    transform: translateX(2px);
    background-color: #a5a0a0;
    color: #2b2b2b;
  }

  &:disabled {
    background-color: #ececec;
    border: none;
    box-shadow: none;
    color: #bfbfbf;
  }
`;

const Button = ({ padding = "", ...props }) => {
  return <ButtonStyled {...props} padding={padding} />;
};
export default Button;
