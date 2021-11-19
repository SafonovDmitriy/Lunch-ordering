import React from "react";
import styled from "styled-components";
import { Button } from "../../components/UI/Button";
import { Modal } from "../../components/UI/Modal";
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
const AllowedTimeHasNotHappenedYet = ({
  open = true,
  onClose,
  placeAnOrder,
}) => {
  const onSuccess = () => {
    placeAnOrder(true);
    onClose();
  };
  const onCansel = () => {
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <h2>
        Are you sure what you want to make an order earlier than the time of
        orders?
      </h2>
      <ButtonBox>
        <Button padding={"5px 15px"} onClick={onSuccess}>
          OK
        </Button>
        <Button padding={"5px 15px"} onClick={onCansel}>
          Cansel
        </Button>
      </ButtonBox>
    </Modal>
  );
};

export default AllowedTimeHasNotHappenedYet;
