import React from "react";
import styled from "styled-components";

const TitleWithInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
`;
const InputWrapper = styled.div`
  width: 100%;
`;

const InputStyled = styled.input`
  font-size: 14px;
  border: 2px solid ${({ isError }) => (isError ? "red" : "black")};
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 10px;
  color: cornflowerblue;
  background-color: #d6d6d645;
  &::placeholder {
    color: cornflowerblue;
    font-size: 1em;
    font-style: italic;
  }
`;
const ErrorMessage = styled.span`
  font-size: 14px;
  color: red;
  display: flex;
  justify-content: right;
  padding-top: 5px;
`;

const Input = ({ title, validation, helperText, ...props }) => {
  return (
    <InputWrapper>
      <TitleWithInput>
        {!!title && <span>{title}</span>}
        <InputStyled {...props} />
      </TitleWithInput>
      {!!helperText && <ErrorMessage>{helperText}</ErrorMessage>}
    </InputWrapper>
  );
};
export default Input;
