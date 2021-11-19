import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { LunchMenuAdmin } from ".";
import LunchMenuUser from "./LunchMenuUser";
import { lunchMenuType } from "./types";

const Container = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerContent = styled.div`
  box-shadow: 0px 0px 0px
    ${({ id, selectMenu, isAdmin }) => {
      return id === selectMenu && isAdmin === "false" ? "2px" : "0px";
    }}
    coral;
  ${({ id, selectMenu, isAdmin }) => {
    return id === selectMenu && isAdmin === "false"
      ? "box-shadow: 0px 0px 8px 0px coral;"
      : "";
  }}

  padding: 15px;
  border-radius: 15px;
  box-sizing: border-box;
  transition: all 0.2s;
`;

const LunchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 330px;
  width: 500px;
  background-color: aliceblue;
  gap: 10px;
  position: relative;
  justify-content: center;
  padding: 0 15px;
  box-shadow: 5px 3px 10px 2px grey;
  border-radius: 8px;
`;
const IndexLunchMenu = styled.h1`
  position: absolute;
  right: 15px;
  top: 10px;
  margin: 0;
`;

const LunchMenuWrapper = ({
  lunchMenu,
  selectLunchHendler,
  desiredMenuSelection,
  isAdmin,
}) => {
  return (
    <>
      {lunchMenu.map((lunch) => (
        <Container key={lunch._id}>
          <ContainerContent
            selectMenu={desiredMenuSelection}
            id={lunch._id}
            isAdmin={isAdmin.toString()}
          >
            <LunchWrapper onClick={() => selectLunchHendler(lunch._id)}>
              <IndexLunchMenu>{lunch.index}</IndexLunchMenu>
              {isAdmin ? (
                <LunchMenuAdmin lunch={lunch} />
              ) : (
                <LunchMenuUser lunch={lunch} />
              )}
            </LunchWrapper>
          </ContainerContent>
        </Container>
      ))}
    </>
  );
};

LunchMenuWrapper.propTypes = {
  lunchMenu: lunchMenuType,
  selectLunchHendler: PropTypes.func,
  desiredMenuSelection: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.string.isRequired,
  ]),
  isAdmin: PropTypes.bool,
};
export default LunchMenuWrapper;
