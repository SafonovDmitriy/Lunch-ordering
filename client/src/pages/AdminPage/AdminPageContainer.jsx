import React, { useState } from "react";
import AdminPage from "./AdminPage";

const AdminPageContainer = () => {
  const [mode, setMode] = useState(false);
  const setModeHendler = () => {
    setMode(!mode);
  };
  return <AdminPage mode={mode} setModeHendler={setModeHendler} />;
};

export default AdminPageContainer;
