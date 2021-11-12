import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AuthFormWrapper from "../../components/UI/Forms/AuthFormWrapper/AuthFormWrapper";
import formGenerator from "../../components/UI/Forms/formGenerator";
import { VALIDATION_MASSAGES } from "../../constants";
import { required } from "../../helpers/validationFuncs";
import { verifyAction } from "../../redux/actions/authAction";

const VerificationPageWrapper = styled.div`
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
        { func: required, message: VALIDATION_MASSAGES.REQUIRED("Code") },
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
      <AuthFormWrapper
        headerTitle="Email verification 'Lunch menu' app"
        children={
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
        }
      />
    </VerificationPageWrapper>
  );
};
export default VerificationPage;
