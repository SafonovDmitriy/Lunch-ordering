import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import PropTypes from "prop-types";

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ModalWindowSelectMenu = ({
  setDesiredMenuSelectionHendler,
  closeModalWindowHendler,
  selectLunchMenuHendler,
}) => {
  const cancelClickButtonHendler = () => {
    setDesiredMenuSelectionHendler(null);
    closeModalWindowHendler();
  };
  const okClickButtonHendler = () => {
    selectLunchMenuHendler();
    closeModalWindowHendler();
  };
  return (
    <Modal open={true} onClose={cancelClickButtonHendler}>
      <h1>Are you sure you want to choose this menu?</h1>
      <p>Today you can no longer change your choice</p>
      <ButtonBox>
        <Button onClick={cancelClickButtonHendler}>Cancel</Button>
        <Button onClick={okClickButtonHendler}>OK</Button>
      </ButtonBox>
    </Modal>
  );
};
ModalWindowSelectMenu.propTypes = {
  setDesiredMenuSelectionHendler: PropTypes.func.isRequired,
  closeModalWindowHendler: PropTypes.func.isRequired,
  selectLunchMenuHendler: PropTypes.func.isRequired,
};
export default ModalWindowSelectMenu;

// PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]);
