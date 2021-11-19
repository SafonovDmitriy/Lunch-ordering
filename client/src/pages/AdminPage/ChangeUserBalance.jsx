import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../../components/UI/Button";
import UserListContainer from "../../components/UserList/UserListContainer";
import { deadlineForOrderingSelector } from "../../redux/selectors";
import AllowedTimeHasNotHappenedYet from "./AllowedTimeHasNotHappenedYet";

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
const ChangeUserBalance = ({ placeAnOrder, openModal, onCloseModal }) => {
  const deadlineForOrdering = useSelector(deadlineForOrderingSelector);

  return (
    <>
      {openModal && (
        <AllowedTimeHasNotHappenedYet
          onClose={onCloseModal}
          placeAnOrder={placeAnOrder}
        />
      )}
      <ChangeUserBalanceContainer>
        <UserListContainer />
        <ShadeAnOrder>
          <Button
            disabled={!deadlineForOrdering}
            onClick={placeAnOrder}
            padding="5px 10px"
          >
            Place an order
          </Button>
        </ShadeAnOrder>
      </ChangeUserBalanceContainer>
    </>
  );
};
ChangeUserBalance.propTypes = {
  shadeAnOrder: PropTypes.func,
  openModal: PropTypes.bool,
  onCloseModal: PropTypes.func,
};
export default ChangeUserBalance;
