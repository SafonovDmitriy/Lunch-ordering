import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { NAVIGATION_MAP } from "../../constants";
import LunchMenu from "./LunchMenu";
import LunchMenuAdmin from "./LunchMenuAdmin";
import { Modal } from "../UI/Modal";
import { Button } from "../UI/Button";
const Container = styled.div`
  box-shadow: 0px 0px 0px
    ${({ id, selectMenu }) => {
      return id === selectMenu ? "2px;" : "0px;";
    }};
  padding: 15px;
  border-radius: 15px;
  border-color: coral;
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

const LunchMenuWrapper = ({ lunchMenu }) => {
  const location = useLocation();
  const [selectMenu, setSelectMenu] = useState(null);
  console.log(`selectMenu`, selectMenu);
  const [openModal, setOpenModal] = useState(false);
  const setOpenModalHendler = () => {
    setOpenModal((prev) => !prev);
  };
  const selectLunch = (lunchID) => {
    console.log(`lunchID`, lunchID);
    setSelectMenu(lunchID);
    setOpenModalHendler();
  };
  return (
    <>
      <Modal open={openModal} onClose={setOpenModalHendler}>
        <h1></h1>
        <p></p>
        <Button></Button>
        <Button></Button>
      </Modal>
      {lunchMenu.map((lunch) => {
        return (
          <Container key={lunch._id} selectMenu={selectMenu} id={lunch._id}>
            <LunchWrapper onClick={() => selectLunch(lunch._id)}>
              <IndexLunchMenu>{lunch.index}</IndexLunchMenu>
              {location.pathname === NAVIGATION_MAP.ADMIN_PAGE ? (
                <LunchMenuAdmin lunch={lunch} />
              ) : (
                <LunchMenu lunch={lunch} />
              )}
            </LunchWrapper>
          </Container>
        );
      })}
    </>
  );
};

export default LunchMenuWrapper;
