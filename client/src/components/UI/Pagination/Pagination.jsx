import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../Button";

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
      <Button onClick={decrementPage} children={"<"} />
      {`${page + 1} / ${total}`}
      <Button onClick={incrementPage} children={">"} />
    </PaginationContainer>
  );
};
Pagination.propTypes = {
  page: PropTypes.number,
  changePage: PropTypes.func,
  total: PropTypes.number,
};
export default Pagination;
