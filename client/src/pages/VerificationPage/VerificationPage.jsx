import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import formGenerator from "../../components/UI/Forms/formGenerator";
import { required } from "../../helpers/validationFuncs";
import { verifyAction } from "../../redux/actions/authAction";

const VerificationPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
`;
const VerificationFormWrapper = styled.div`
  width: 380px;
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

const VerificationPage = () => {
  const dispatch = useDispatch();
  const { email } = useParams();

  const [form, setForm] = useState([
    {
      title: "Email:",
      value: email,
      name: "email",

      extra: {
        disabled: true,
      },
    },
    {
      title: "Code:",
      value: "",
      name: "code",
      validation: [
        { func: required, message: "The Code field must be filled" },
      ],
      extra: {
        placeholder: "Verification Code",
      },
    },
  ]);

  const [error, setError] = useState({});

  const onSubmit = (newForm) => {
    dispatch(verifyAction(newForm));
  };
  return (
    <VerificationPageWrapper>
      <VerificationFormWrapper>
        <FormHeader
          children={
            <FormHeaderTitle children={"Email verification 'Lunch menu' app"} />
          }
        />
        <FormContent
          children={formGenerator({
            form,
            error,
            setForm,
            setError,
            onSubmit,
            submitText: "Verify account",
          })}
        />
      </VerificationFormWrapper>
    </VerificationPageWrapper>
  );
};
export default VerificationPage;
