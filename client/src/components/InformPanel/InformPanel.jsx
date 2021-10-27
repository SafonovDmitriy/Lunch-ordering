import { useSelector } from "react-redux";
import styled from "styled-components";
import { userBalanceSelector, userEmailSelector } from "../../redux/selectors";

const InformPanelWrapper = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  align-items: center;
`;
const InformPanel = () => {
  const balance = useSelector(userBalanceSelector);
  const email = useSelector(userEmailSelector);
  return (
    <InformPanelWrapper>
      <span>{`Balance: ${balance} грн`}</span>
      <span>{email}</span>
      <button>SignOut</button>
    </InformPanelWrapper>
  );
};
export default InformPanel;
