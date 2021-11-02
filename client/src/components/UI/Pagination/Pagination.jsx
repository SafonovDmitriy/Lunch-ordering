import { Button } from "../Button";

import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  margin-top: auto;
`;
const Pagination = ({ page, changePage, total }) => {
  const incrementPage = () => {
    changePage(page + 1);
  };
  const decrementPage = () => {
    changePage(page - 1);
  };
  return (
    <PaginationContainer>
      <Button onClick={decrementPage}>-</Button>
      {`${page + 1} / ${total}`}
      <Button onClick={incrementPage}>+</Button>
    </PaginationContainer>
  );
};
export default Pagination;
