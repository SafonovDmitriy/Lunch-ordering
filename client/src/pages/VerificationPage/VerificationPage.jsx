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
`;
const VerificationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  border-radius: 10px;
  width: 330px;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

const VerificationFormHeader = styled.div`
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
      validation: [{ func: required, message: "it`s requided field" }],
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
        <VerificationFormHeader>
          Email verification 'Lunch menu' app
        </VerificationFormHeader>
        {formGenerator({
          form,
          error,
          setForm,
          setError,
          onSubmit,
          submitText: "Verify account",
        })}
      </VerificationFormWrapper>
    </VerificationPageWrapper>
  );
};
export default VerificationPage;
