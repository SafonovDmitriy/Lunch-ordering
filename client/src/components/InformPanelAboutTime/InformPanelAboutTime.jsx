import React from "react";
import styled from "styled-components";
import Watch from "./Watch";
const InformPanelAboutTimeWrapper = styled.div`
  padding: 15px 0;
  margin: 7px;
`;
const InformPanelAboutTime = () => {
  return (
    <InformPanelAboutTimeWrapper>
      <Watch />
    </InformPanelAboutTimeWrapper>
  );
};

export default InformPanelAboutTime;
