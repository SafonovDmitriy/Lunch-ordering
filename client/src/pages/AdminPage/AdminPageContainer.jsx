import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shadeAnOrderAction } from "../../redux/actions/adminAction";
import AdminPage from "./AdminPage";

const AdminPageContainer = () => {
  const dispatch = useDispatch();
  const [switchMode, setSwitchMode] = useState(false);
  const setModeHendler = () => {
    setSwitchMode(!switchMode);
  };
  const shadeAnOrder = () => {
    dispatch(shadeAnOrderAction());
  };
  return (
    <AdminPage
      switchMode={switchMode}
      setModeHendler={setModeHendler}
      shadeAnOrder={shadeAnOrder}
    />
  );
};

export default AdminPageContainer;
