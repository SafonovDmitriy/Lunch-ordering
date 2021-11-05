import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Switch } from "../../components/UI/Switch";
import ChangeMenu from "./ChangeMenu";
import ChangeUserBalance from "./ChangeUserBalance";

const Container = styled.div`
  min-height: calc(100vh - 30px);
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const AdminPage = ({ switchMode, setModeHendler, shadeAnOrder }) => {
  return (
    <Container>
      <Switch switchMode={switchMode} setModeHendler={setModeHendler} />
      {switchMode ? (
        <ChangeUserBalance shadeAnOrder={shadeAnOrder} />
      ) : (
        <ChangeMenu />
      )}
    </Container>
  );
};
AdminPage.propTypes = {
  switchMode: PropTypes.bool,
  setModeHendler: PropTypes.func,
  shadeAnOrder: PropTypes.func,
};
export default AdminPage;
