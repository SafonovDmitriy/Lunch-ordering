import React from "react";
import styled from "styled-components";
import { ShowDeadLineForOrder } from "../ShowDeadLineForOrder";
import Watch from "./Watch";

const InformPanelAboutTimeWrapper = styled.div`
  padding: 15px 0;
  margin: 7px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InformPanelAboutTime = () => {
  return (
    <InformPanelAboutTimeWrapper>
      <Watch />
      <ShowDeadLineForOrder />
    </InformPanelAboutTimeWrapper>
  );
};

export default InformPanelAboutTime;
