import React from "react";
import Spinner from "react-spinners/PacmanLoader";
import styled from "styled-components";
const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => (
  <LoadingContainer>
    <Spinner color={"green"} loading={true} size={100} />
  </LoadingContainer>
);

export default Loading;
