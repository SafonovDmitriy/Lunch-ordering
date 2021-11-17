import PropTypes from "prop-types";
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
  setDesiredMenuSelectionHendler,
  closeModalWindowHendler,
  selectLunchMenuHendler,
  selectMenu,
}) => {
  const cancelClickButtonHendler = () => {
    setDesiredMenuSelectionHendler(selectMenu || null);
    closeModalWindowHendler();
  };
  const okClickButtonHendler = () => {
    selectLunchMenuHendler(selectMenu);
    closeModalWindowHendler();
  };

  return (
    <Modal open={true} onClose={cancelClickButtonHendler}>
      {selectMenu ? (
        <h1>Are you sure you want to replace the selected menu?</h1>
      ) : (
        <h1>Are you sure you want to choose this menu?</h1>
      )}

      <ButtonBox>
        <Button padding={"5px 15px"} onClick={cancelClickButtonHendler}>
          Cancel
        </Button>
        <Button padding={"5px 15px"} onClick={okClickButtonHendler}>
          OK
        </Button>
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
