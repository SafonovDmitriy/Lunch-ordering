import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { deadlineForOrderingSelector } from "../../redux/selectors";
const DeadlineForOrderingBox = styled.div``;
const ShowDeadLineForOrder = () => {
  const deadlineForOrdering = useSelector(deadlineForOrderingSelector);

  return (
    !!deadlineForOrdering && (
      <DeadlineForOrderingBox>{`You can make an order before ${deadlineForOrdering}`}</DeadlineForOrderingBox>
    )
  );
};

export default ShowDeadLineForOrder;
