import React from "react";
import styled from "styled-components";
import { Pagination } from "../UI/Pagination";
import UserItem from "./UserItem";
const UserListContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
`;
const UserListBox = styled.div`
  background-color: ghostwhite;
  display: flex;
  height: 90%;
  width: 100%;
  border: solid 1px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;
const UserListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: burlywood;
  padding: 10px 20px;
  align-items: center;
  border: solid 1px;
  border-radius: 5px;
  box-shadow: 1px 1px 0px 0px;
`;

const UserList = ({
  users,
  numberPage,
  setNumberPageHendler,
  usersTotalPage,
}) => {
  return (
    <UserListContainer>
      <UserListBox>
        <UserListHeader>
          <span>Email</span>
          <span>Balance</span>
        </UserListHeader>
        {users.map((user) => {
          return (
            <UserItem key={user._id} user={user} numberPage={numberPage} />
          );
        })}
        {usersTotalPage > 1 && (
          <Pagination
            page={numberPage}
            changePage={setNumberPageHendler}
            total={usersTotalPage}
          />
        )}
      </UserListBox>
    </UserListContainer>
  );
};

export default UserList;
