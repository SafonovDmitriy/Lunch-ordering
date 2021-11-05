import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/UI/Button";
import UserListContainer from "../../components/UserList/UserListContainer";

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
const ChangeUserBalance = ({ shadeAnOrder }) => {
  return (
    <ChangeUserBalanceContainer>
      <UserListContainer />
      <ShadeAnOrder>
        <Button onClick={shadeAnOrder} padding="5px 10px">
          Shade an order
        </Button>
      </ShadeAnOrder>
    </ChangeUserBalanceContainer>
  );
};
ChangeUserBalance.propTypes = {
  shadeAnOrder: PropTypes.func,
};
export default ChangeUserBalance;
