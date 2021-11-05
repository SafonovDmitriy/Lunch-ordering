import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 16px;
  display: flex;

  ${({ padding }) => (padding ? "padding:" + padding : "")};
  color: #5dcfc3;
  border-radius: 8px;
  align-items: center;
  box-shadow: 2px 1px;
  transition: all 0.05s;
  &:active {
    box-shadow: 0px 0px;
    transform: translateX(2px);
  }
`;

const Button = ({ padding = "", ...props }) => {
  return <ButtonStyled {...props} padding={padding} />;
};
export default Button;
