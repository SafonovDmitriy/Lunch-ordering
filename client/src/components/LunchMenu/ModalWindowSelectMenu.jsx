import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const ModalWindowSelectMenu = ({
  isOpenModal,
  setDesiredMenuSelection,
  closeModalWindowHendler,
  selectLunchMenuHendler,
}) => {
  const cancelClickButtonHendler = () => {
    setDesiredMenuSelection(null);
    closeModalWindowHendler();
  };
  const okClickButtonHendler = () => {
    selectLunchMenuHendler();
    closeModalWindowHendler();
  };
  return (
    <Modal open={isOpenModal} onClose={cancelClickButtonHendler}>
      <h1>Are you sure you want to choose this menu?</h1>
      <p>Today you can no longer change your choice</p>
      <ButtonBox>
        <Button onClick={cancelClickButtonHendler}>Cancel</Button>
        <Button onClick={okClickButtonHendler}>OK</Button>
      </ButtonBox>
    </Modal>
  );
};
export default ModalWindowSelectMenu;
