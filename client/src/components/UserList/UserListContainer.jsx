import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../redux/actions/adminAction";
import {
  isUsersLoadedSelector,
  isUsersLoadingSelector,
  usersSelector,
  usersTotalPageSelector,
} from "../../redux/selectors";
import UserList from "./UserList";

const UserListContainer = () => {
  const dispatch = useDispatch();
  const [numberPage, setNumberPage] = useState(0);
  const users = useSelector(usersSelector);
  const usersTotalPage = useSelector(usersTotalPageSelector);
  const isUsersLoading = useSelector(isUsersLoadingSelector);
  const isUsersLoaded = useSelector(isUsersLoadedSelector);

  const setNumberPageHendler = (page) => {
    if (page === usersTotalPage) {
      return setNumberPage(0);
    }
    if (page < 0) {
      return setNumberPage(usersTotalPage - 1);
    }
    setNumberPage(page);
    dispatch(getAllUsersAction(page));
  };
  useEffect(() => {
    dispatch(getAllUsersAction(numberPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    !isUsersLoading &&
    isUsersLoaded && (
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
