import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateBalanceUserAction } from "../../redux/actions/adminAction";
import { userType } from "./types";

const UserItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blanchedalmond;
  padding: 10px 20px;
  align-items: center;
  border: solid 1px;
  border-radius: 5px;
  box-shadow: 1px 1px 0px 0px;
`;
const UserItem = ({
  user: { _id: userId, email: userEmail, balance: userBalance },
}) => {
  const dispatch = useDispatch();
  const [isShowInput, setIsShowInput] = useState(false);
  const [balance, onChange] = useState(userBalance);
  const onChangeHendler = (value) => {
    onChange(value);
  };

  const setIsShowInputHendler = () => {
    setIsShowInput(!isShowInput);
  };
  const onBlurHendler = (selectUserId) => {
    setIsShowInputHendler();
    dispatch(updateBalanceUserAction({ selectUserId, balance }));
  };
  return (
    <UserItemContainer>
      <span>{userEmail}</span>
      {!isShowInput ? (
        <span onDoubleClick={setIsShowInputHendler}>
          {`${userBalance} `}&#8372;
        </span>
      ) : (
        <input
          type="number"
          value={balance}
          onChange={(e) => onChangeHendler(e.target.value)}
          autoFocus
          onBlur={() => onBlurHendler(userId)}
        />
      )}
    </UserItemContainer>
  );
};
UserItem.propTypes = {
  user: userType,
  numberPage: PropTypes.number,
};
export default UserItem;
