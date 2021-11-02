import React from "react";
import styled from "styled-components";
import { Button } from "../../components/UI/Button";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70vw;
`;
const HeaderTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: burlywood;
  padding: 10px;
  align-items: center;
  border: solid 1px;
  border-radius: 5px;
  margin-top: 10px;
`;
const ItemOfHistoryListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: blanchedalmond;
  padding: 10px;
  align-items: center;
  border: solid 1px;
  border-radius: 5px;
`;
const StatisticsPage = ({
  userHistory,
  numberPage,
  setNumberPageHendler,
  userHistoryTotalPage,
}) => {
  return (
    <Container>
      <TableContainer>
        <HeaderTable>
          <span>Date</span>
          <span>Description</span>
        </HeaderTable>
        {userHistory.map((item) => (
          <ItemOfHistoryListWrapper key={item.id}>
            <span>{item.date}</span>
            <span> {item.description}</span>
          </ItemOfHistoryListWrapper>
        ))}
        {userHistoryTotalPage > 1 && (
          <Pagination
            page={numberPage}
            changePage={setNumberPageHendler}
            total={userHistoryTotalPage}
          />
        )}
      </TableContainer>
    </Container>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;
export default StatisticsPage;
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
