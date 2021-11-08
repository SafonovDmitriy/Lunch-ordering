import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { placeAnOrderAction } from "../../redux/actions/adminAction";
import AdminPage from "./AdminPage";

const AdminPageContainer = () => {
  const dispatch = useDispatch();
  const [switchMode, setSwitchMode] = useState(false);
  const setModeHendler = () => {
    setSwitchMode(!switchMode);
  };
  const placeAnOrder = () => {
    dispatch(placeAnOrderAction());
  };
  return (
    <AdminPage
      switchMode={switchMode}
      setModeHendler={setModeHendler}
      placeAnOrder={placeAnOrder}
    />
  );
};

export default AdminPageContainer;
