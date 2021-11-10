import React from "react";
import Spinner from "react-spinners/PacmanLoader";
import styled from "styled-components";
const LoadingContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Loading = () => (
  <LoadingContainer>
    <Spinner
      color={"#bbbbbb"}
      css="transform: translate(-25%, -50%);"
      loading={true}
      size={75}
    />
  </LoadingContainer>
);

export default Loading;
