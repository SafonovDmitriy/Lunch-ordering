import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NAVIGATION_PATH } from "../../constants";
import formGenerator from "../../helpers/formGenerator";
import { required, validateEmail } from "../../helpers/validationFuncs";

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  border-radius: 10px;
  width: 280px;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

const LoginFormHeader = styled.div`
  width: 100%;
  height: 25px;
  background-color: grey;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  border-radius: 8px 8px 0 0;
  padding: 5px 0;
`;

const LoginPage = () => {
  const [form, setForm] = useState([
    {
      title: "Email:",
      value: "",
      name: "email",
      placeholde: "Email",
      validation: [
        { func: required, message: "it`s requided field" },
        { func: validateEmail, message: "it`s email validation" },
      ],
    },
    {
      title: "Password:",
      value: "",
      name: "password",
      placeholde: "Password",
      validation: [{ func: required, message: "it`s requided field" }],
    },
  ]);

  const [error, setError] = useState({});

  const onSubmit = (newForm) => {
    console.log(`newForm`, newForm);
  };
  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <LoginFormHeader>Sign In 'Lunch Menu' app</LoginFormHeader>
        {formGenerator({
          form,
          error,
          setForm,
          setError,
          onSubmit,
          submitText: "Sign In",
        })}
        <Link to={NAVIGATION_PATH.REGISTRATION_PAGE}>
          Go to Registration Page
        </Link>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};
export default LoginPage;
