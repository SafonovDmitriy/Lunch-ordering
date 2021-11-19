import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Switch } from "../../components/UI/Switch";
import ChangeMenu from "./ChangeMenu";
import ChangeUserBalance from "./ChangeUserBalance";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AdminPage = ({
  switchMode,
  setModeHendler,
  placeAnOrder,
  openModal,
  onCloseModal,
}) => {
  return (
    <Container>
      <Switch switchMode={!switchMode} setModeHendler={setModeHendler} />
      {switchMode ? (
        <ChangeUserBalance
          placeAnOrder={placeAnOrder}
          openModal={openModal}
          onCloseModal={onCloseModal}
        />
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
  openModal: PropTypes.bool,
  onCloseModal: PropTypes.func,
};
export default AdminPage;
