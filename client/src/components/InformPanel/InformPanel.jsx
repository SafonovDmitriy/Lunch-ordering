import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logOutAction } from "../../redux/actions/authAction";
import { userBalanceSelector, userEmailSelector } from "../../redux/selectors";
import { Button } from "../UI/Button";

const InformPanelWrapper = styled.div`
  display: flex;
  gap: 15px;
  font-size: 15px;
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
      <span>{`Balance: ${balance} `}&#8372;</span>
      <span>{email}</span>
      <Button onClick={logOut} padding="5px 10px">
        SignOut
      </Button>
    </InformPanelWrapper>
  );
};
export default InformPanel;
