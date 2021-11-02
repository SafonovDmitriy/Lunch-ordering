import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../redux/actions/adminAction";
import { usersSelector, usersTotalPageSelector } from "../../redux/selectors";
import UserList from "./UserList";

const UserListContainer = () => {
  const dispatch = useDispatch();
  const [numberPage, setNumberPage] = useState(0);
  const users = useSelector(usersSelector);
  const usersTotalPage = useSelector(usersTotalPageSelector);
  const setNumberPageHendler = (page) => {
    if (page === usersTotalPage) {
      return setNumberPage(0);
    }
    if (page < 0) {
      return setNumberPage(usersTotalPage - 1);
    }
    setNumberPage(page);
  };
  useEffect(() => {
    dispatch(getAllUsersAction(numberPage));
  }, [dispatch, numberPage]);
  return (
    !!usersTotalPage && (
      <UserList
        users={users}
        numberPage={numberPage}
        setNumberPageHendler={setNumberPageHendler}
        usersTotalPage={usersTotalPage}
      />
    )
  );
};

export default UserListContainer;
