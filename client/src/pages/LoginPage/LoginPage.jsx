import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import formGenerator from "../../components/UI/Forms/formGenerator";
import { NAVIGATION_MAP } from "../../constants";

import { required, validateEmail } from "../../helpers/validationFuncs";
import { authorizationAction } from "../../redux/actions/authAction";
const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginFormWrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #052a6e;
  border: solid 1px;
  box-shadow: 3px 3px 2px 0px;
  border-radius: 10px;
`;
const FormHeader = styled.div`
  width: 100%;
  height: 40px;
  background-color: #3415b0;
  border-radius: 7px 7px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormHeaderTitle = styled.h1`
  font-size: 21px;
  color: #5dcfc3;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  padding: 30px 25px;
  box-sizing: border-box;
  & input {
    width: 180px;
    color: #5dcfc3;
  }
`;
const FormLinkBox = styled.div`
  margin: 5px 0;
  & a {
    color: #5dcfc3;
  }
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState([
    {
      title: "Email:",
      value: "",
      name: "email",

      validation: [
        { func: required, message: "The email field must be filled" },
        {
          func: validateEmail,
          message: "In this field there must be an existing email",
        },
      ],
      extra: {
        placeholder: "Email",
      },
    },
    {
      title: "Password:",
      value: "",
      name: "password",
      validation: [
        { func: required, message: "The Password field must be filled" },
      ],
      extra: {
        placeholder: "Password",
      },
    },
  ]);

  const [error, setError] = useState({});

  const onSubmit = (newForm) => {
    dispatch(authorizationAction(newForm));
  };
  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <FormHeader
          children={<FormHeaderTitle children={"Sign In 'Lunch Menu' app"} />}
        />
        <FormContent
          children={formGenerator({
            form,
            error,
            setForm,
            setError,
            onSubmit,
            submitText: "Sign In",
          })}
        />
        <FormLinkBox
          children={
            <Link
              to={NAVIGATION_MAP.REGISTRATION_PAGE}
              children={"Go to Registration Page"}
            />
          }
        />
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};
export default LoginPage;
