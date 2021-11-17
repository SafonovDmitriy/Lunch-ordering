import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../components/UI/Modal";
import {
  deadlineForOrderingSelector,
  isLunchMenuLoadedSelector,
  selectMenuSelector,
} from "../../redux/selectors";
const IsNotDeadlineForOrdering = () => (
  <h2 children="The administrator still did not allow to order" />
);
const IsSelectMenu = () => (
  <h2 children="The time of the order has come out, your order is already on the way" />
);
const IsNotSelectMenu = () => (
  <h2 children="The time of order possibilities came out, today you can no longer be ordered" />
);
const EndDeadlineTimesModal = ({ open = true }) => {
  const selectMenu = useSelector(selectMenuSelector);
  const deadlineForOrdering = useSelector(deadlineForOrderingSelector);
  const isLunchMenuLoaded = useSelector(isLunchMenuLoadedSelector);

  return (
    isLunchMenuLoaded && (
      <Modal open={open}>
        {!deadlineForOrdering && <IsNotDeadlineForOrdering />}
        {deadlineForOrdering &&
          (!!selectMenu ? <IsSelectMenu /> : <IsNotSelectMenu />)}
      </Modal>
    )
  );
};

export default EndDeadlineTimesModal;
