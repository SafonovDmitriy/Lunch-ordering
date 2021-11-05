import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
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
    <ClipLoader color={"red"} loading={true} size={150} />
  </LoadingContainer>
);

export default Loading;
