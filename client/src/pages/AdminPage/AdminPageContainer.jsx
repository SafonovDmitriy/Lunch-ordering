import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shadeAnOrderAction } from "../../redux/actions/adminAction";
import AdminPage from "./AdminPage";

const AdminPageContainer = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(false);
  const setModeHendler = () => {
    setMode(!mode);
  };
  const shadeAnOrder = () => {
    dispatch(shadeAnOrderAction());
  };
  return (
    <AdminPage
      mode={mode}
      setModeHendler={setModeHendler}
      shadeAnOrder={shadeAnOrder}
    />
  );
};

export default AdminPageContainer;
