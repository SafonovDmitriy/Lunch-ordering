import React from "react";
import styled from "styled-components";
import { Pagination } from "../../components/UI/Pagination";
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 95%;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70vw;
  background-color: ghostwhite;
  border: solid 1px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
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
  box-shadow: 1px 1px 0px 0px;
`;
const ItemOfHistoryListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: blanchedalmond;
  padding: 10px;
  align-items: center;
  border: solid 1px;
  border-radius: 5px;
  box-shadow: 1px 1px 0px 0px;
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

export default StatisticsPage;
