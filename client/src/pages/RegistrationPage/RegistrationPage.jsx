import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import formGenerator from "../../components/UI/Forms/formGenerator";
import { NAVIGATION_MAP } from "../../constants";
import {
  required,
  sameFields,
  validateEmail,
} from "../../helpers/validationFuncs";
import { registrationAction } from "../../redux/actions/authAction";
const RegistrationPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const RegistrationFormWrapper = styled.div`
  width: 340px;
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

const RegistrationPage = () => {
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
    {
      title: "Confirm password:",
      value: "",
      name: "confirmPassword",
      validation: [
        {
          func: required,
          message: "The Confirm password field must be filled",
        },
        {
          func: sameFields,
          extra: {},
          byField: "password",
          message: "Confirming password does not meet the original",
        },
      ],
      extra: {
        placeholder: "Confirm password",
      },
    },
  ]);

  const [error, setError] = useState({});

  const onSubmit = (newForm) => {
    dispatch(registrationAction(newForm));
  };
  return (
    <RegistrationPageWrapper>
      <RegistrationFormWrapper>
        <FormHeader
          children={
            <FormHeaderTitle children={"Register with 'Lanch Menu' app"} />
          }
        />
        <FormContent
          children={formGenerator({
            form,
            error,
            setForm,
            setError,
            onSubmit,
            submitText: "Sign Up",
          })}
        />
        <FormLinkBox
          children={
            <Link
              to={NAVIGATION_MAP.LOGIN_PAGE}
              children={"Go to Autoriz Page"}
            />
          }
        />
      </RegistrationFormWrapper>
    </RegistrationPageWrapper>
  );
};
export default RegistrationPage;
