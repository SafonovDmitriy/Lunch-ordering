import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkDeadlineTimes } from "../../helpers/checkDeadlineTimes";
import { placeAnOrderAction } from "../../redux/actions/adminAction";
import { deadlineForOrderingSelector } from "../../redux/selectors";
import AdminPage from "./AdminPage";

const AdminPageContainer = () => {
  const dispatch = useDispatch();
  const deadlineForOrdering = useSelector(deadlineForOrderingSelector);
  const [openModal, setOpenModal] = useState(false);
  const [switchMode, setSwitchMode] = useState(false);
  const setModeHendler = () => {
    setSwitchMode(!switchMode);
  };
  const isEndDeadlineTimes = deadlineForOrdering
    ? checkDeadlineTimes(deadlineForOrdering)
    : false;

  const placeAnOrder = (follow = false) => {
    if (follow | isEndDeadlineTimes) {
      dispatch(placeAnOrderAction());
      return;
    }
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <AdminPage
        switchMode={switchMode}
        setModeHendler={setModeHendler}
        placeAnOrder={placeAnOrder}
        openModal={openModal}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default AdminPageContainer;
