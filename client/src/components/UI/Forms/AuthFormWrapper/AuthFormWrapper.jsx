import React from "react";
import styled from "styled-components";

const LoginFormWrapper = styled.div`
  background-color: white;
  border: solid black 1px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px #4e4e4e;
`;
const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormHeaderTitle = styled.h1`
  font-size: 21px;
  margin: 0;
  padding: 8px 5px;
  color: #2b2b2b;
`;
const AuthFormWrapper = ({ children, headerTitle }) => {
  return (
    <>
      <LoginFormWrapper>
        <FormHeader children={<FormHeaderTitle children={headerTitle} />} />
        {children}
      </LoginFormWrapper>
    </>
  );
};

export default AuthFormWrapper;
