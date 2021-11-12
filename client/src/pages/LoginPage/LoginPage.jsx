import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthFormWrapper from "../../components/UI/Forms/AuthFormWrapper/AuthFormWrapper";
import formGenerator from "../../components/UI/Forms/formGenerator";
import { NAVIGATION_MAP, VALIDATION_MASSAGES } from "../../constants";

import { required, validateEmail } from "../../helpers/validationFuncs";
import { authorizationAction } from "../../redux/actions/authAction";
const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const FormContent = styled.div`
  padding: 11px 0;
  & input {
    width: 180px;
  }
`;
const FormLinkBox = styled.div`
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    color: #2b2b2b;
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
        { func: required, message: VALIDATION_MASSAGES.REQUIRED("email") },
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
        { func: required, message: VALIDATION_MASSAGES.REQUIRED("password") },
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
      <AuthFormWrapper
        headerTitle="Sign In 'Lunch Menu' app"
        children={
          <>
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
          </>
        }
      />
    </LoginPageWrapper>
  );
};
export default LoginPage;
