import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NAVIGATION_MAP } from "../../constants";
import formGenerator from "../../helpers/formGenerator";
import { required, validateEmail } from "../../helpers/validationFuncs";
import { registrationAction } from "../../redux/actions/authAction";
const RegistrationPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const RegistrationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  border-radius: 10px;
  width: 330px;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

const RegistrationFormHeader = styled.div`
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

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState([
    {
      title: "Email:",
      value: "",
      name: "email",

      validation: [
        { func: required, message: "it`s requided field" },
        { func: validateEmail, message: "it`s email validation" },
      ],
      extra: {
        placeholder: "Email",
      },
    },
    {
      title: "Password:",
      value: "",
      name: "password",
      validation: [{ func: required, message: "it`s requided field" }],
      extra: {
        placeholder: "Password",
      },
    },
    {
      title: "Confirm password:",
      value: "",
      name: "confirmPassword",
      validation: [{ func: required, message: "it`s requided field" }],
      extra: {
        placeholder: "Confirm password",
      },
    },
  ]);

  const [error, setError] = useState({});

  const onSubmit = (newForm) => {
    console.log(`newForm`, newForm);
    dispatch(registrationAction(newForm));
  };
  return (
    <RegistrationPageWrapper>
      <RegistrationFormWrapper>
        <RegistrationFormHeader>
          Register with 'Lanch Menu' app
        </RegistrationFormHeader>
        {formGenerator({
          form,
          error,
          setForm,
          setError,
          onSubmit,
          submitText: "Sign Up",
        })}
        <Link to={NAVIGATION_MAP.LOGIN_PAGE}>Go to Autoriz Page</Link>
      </RegistrationFormWrapper>
    </RegistrationPageWrapper>
  );
};
export default RegistrationPage;
