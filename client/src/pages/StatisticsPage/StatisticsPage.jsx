import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Pagination } from "../../components/UI/Pagination";
import { userHistoryType } from "./types";
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 40px);
  margin-top: 15px;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70vw;
  background-color: ghostwhite;

  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  height: 90vh;
  box-shadow: 1px 1px 4px 0px;
`;
const HeaderTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(222 184 135 / 30%);
  padding: 10px;
  align-items: center;

  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 1px 1px 4px 0px;
`;
const ItemOfHistoryListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(255 235 205 / 50%);
  padding: 10px;
  align-items: center;

  border-radius: 5px;
  box-shadow: 1px 1px 4px 0px;
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
StatisticsPage.propTypes = {
  userHistory: userHistoryType,
  numberPage: PropTypes.number,
  setNumberPageHendler: PropTypes.func,
  userHistoryTotalPage: PropTypes.number,
};
export default StatisticsPage;
