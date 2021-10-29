import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logOutAction } from "../../redux/actions/authAction";
import { userBalanceSelector, userEmailSelector } from "../../redux/selectors";

const InformPanelWrapper = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  align-items: center;
`;
const InformPanel = () => {
  const dispatch = useDispatch();
  const balance = useSelector(userBalanceSelector);
  const email = useSelector(userEmailSelector);
  const logOut = () => {
    dispatch(logOutAction());
  };
  return (
    <InformPanelWrapper>
      <span>{`Balance: ${balance} грн`}</span>
      <span>{email}</span>
      <button onClick={logOut}>SignOut</button>
    </InformPanelWrapper>
  );
};
export default InformPanel;
