import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  font-style: italic;
  color: cornflowerblue;
`;

const Button = (props) => {
  return <ButtonStyled {...props} />;
};
export default Button;
