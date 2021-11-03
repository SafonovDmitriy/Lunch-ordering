import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { LunchMenu } from "../../components/LunchMenu";
import { Button } from "../../components/UI/Button";
import { Switch } from "../../components/UI/Switch";
import UserListContainer from "../../components/UserList/UserListContainer";
const Container = styled.div`
  min-height: calc(100vh - 30px);
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const ChangeMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ChangeMenuBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1120px;
  height: min-content;
`;

const ChangeUserBalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 30px);
`;

const ShadeAnOrder = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AdminPage = ({ mode, setModeHendler, shadeAnOrder }) => {
  return (
    <Container>
      <Switch mode={mode} setModeHendler={setModeHendler} />
      {mode ? (
        <ChangeUserBalanceContainer>
          <UserListContainer />
          <ShadeAnOrder>
            <Button onClick={shadeAnOrder}>Shade an order</Button>
          </ShadeAnOrder>
        </ChangeUserBalanceContainer>
      ) : (
        <ChangeMenuContainer>
          <ChangeMenuBox>
            <LunchMenu />
          </ChangeMenuBox>
        </ChangeMenuContainer>
      )}
    </Container>
  );
};
AdminPage.propTypes = {
  mode: PropTypes.bool,
  setModeHendler: PropTypes.func,
  shadeAnOrder: PropTypes.func,
};
export default AdminPage;
