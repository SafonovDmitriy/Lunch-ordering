import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../components/UI/Modal";
import { isMenuOpenSelector, selectMenuSelector } from "../../redux/selectors";
const IsNotDeadlineForOrdering = () => (
  <h2 children="The administrator still did not allow to order" />
);
const IsSelectMenu = () => (
  <h2 children="The time of the order has come out, your order is already on the way" />
);
const IsNotSelectMenu = () => (
  <h2 children="The time of order possibilities came out, today you can no longer be ordered" />
);
const EndDeadlineTimesModal = () => {
  const selectMenu = useSelector(selectMenuSelector);
  const isMenuOpen = useSelector(isMenuOpenSelector);
  return (
    <Modal open={true}>
      {!isMenuOpen && <IsNotDeadlineForOrdering />}
      {isMenuOpen && (!!selectMenu ? <IsSelectMenu /> : <IsNotSelectMenu />)}
    </Modal>
  );
};

export default EndDeadlineTimesModal;
