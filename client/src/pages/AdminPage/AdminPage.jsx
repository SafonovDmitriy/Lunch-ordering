import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Switch } from "../../components/UI/Switch";
import ChangeMenu from "./ChangeMenu";
import ChangeUserBalance from "./ChangeUserBalance";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const AdminPage = ({ switchMode, setModeHendler, placeAnOrder }) => {
  return (
    <Container>
      <Switch switchMode={!switchMode} setModeHendler={setModeHendler} />
      {switchMode ? (
        <ChangeUserBalance placeAnOrder={placeAnOrder} />
      ) : (
        <ChangeMenu />
      )}
    </Container>
  );
};
AdminPage.propTypes = {
  switchMode: PropTypes.bool,
  setModeHendler: PropTypes.func,
  placeAnOrder: PropTypes.func,
};
export default AdminPage;
