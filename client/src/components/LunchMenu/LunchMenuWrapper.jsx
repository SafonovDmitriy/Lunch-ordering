import React from "react";
import styled from "styled-components";
import LunchMenuAdmin from "./LunchMenuAdmin";
import LunchMenuUser from "./LunchMenuUser";

const ContainerContent = styled.div`
  box-shadow: 0px 0px 0px
    ${({ id, selectMenu }) => {
      return id === selectMenu ? "2px" : "0px";
    }}
    coral;
  padding: 15px;
  border-radius: 15px;
  box-sizing: border-box;
  transition: all 0.2s;
`;

const LunchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 500px;
  background-color: aliceblue;
  gap: 10px;
  position: relative;
  justify-content: center;
  padding: 0 15px;
  box-sizing: content-box;
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
        <div key={lunch._id}>
          <ContainerContent selectMenu={desiredMenuSelection} id={lunch._id}>
            <LunchWrapper onClick={() => selectLunchHendler(lunch._id)}>
              <IndexLunchMenu>{lunch.index}</IndexLunchMenu>
              {isAdmin ? (
                <LunchMenuAdmin lunch={lunch} />
              ) : (
                <LunchMenuUser lunch={lunch} />
              )}
            </LunchWrapper>
          </ContainerContent>
        </div>
      ))}
    </>
  );
};

export default LunchMenuWrapper;
