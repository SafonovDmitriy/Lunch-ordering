import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleWithInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputStyled = styled.input`
  width: 180px;
  color: #5dcfc3;
  border-radius: 10px;
  padding: 2px 9px;
  box-sizing: border-box;
`;
const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 1px 1px #de5a5a;
  margin: 4px 0;
  height: ${({ children }) => (!!children ? "45px" : "0")};
  overflow: hidden;
  transition: all 0.5s;
`;
const ErrorMessage = styled.span`
  color: #de5a5a;
  padding: 5px;
`;

const Input = ({ title = "", helperText = "", ...props }) => {
  return (
    <InputWrapper>
      <TitleWithInput>
        {!!title && <span>{title}</span>}
        <InputStyled {...props} />
      </TitleWithInput>
      <ErrorBox
        children={!!helperText && <ErrorMessage>{helperText}</ErrorMessage>}
      />
    </InputWrapper>
  );
};
Input.propTypes = {
  title: PropTypes.string,
  helperText: PropTypes.string,
};
export default Input;
