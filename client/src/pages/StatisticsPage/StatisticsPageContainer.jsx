import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import {
  getUserHistoryOrderAction,
  setUserHistoryOrderLoadedAction,
} from "../../redux/actions/userHistoryOrderAction";
import {
  isUserHistoryLoadedSelector,
  userHistorySelector,
  userHistoryTotalPageSelector,
} from "../../redux/selectors";
import StatisticsPage from "./StatisticsPage";

const StatisticsPageContainer = () => {
  const dispatch = useDispatch();
  const [numberPage, setNumberPage] = useState(0);

  const userHistory = useSelector(userHistorySelector);

  const isUserHistoryLoaded = useSelector(isUserHistoryLoadedSelector);
  const userHistoryTotalPage = useSelector(userHistoryTotalPageSelector);

  const setNumberPageHendler = (page) => {
    if (page === userHistoryTotalPage) {
      return setNumberPage(0);
    }
    if (page < 0) {
      return setNumberPage(userHistoryTotalPage - 1);
    }
    setNumberPage(page);
    dispatch(getUserHistoryOrderAction(page));
  };

  useEffect(() => {
    dispatch(getUserHistoryOrderAction(numberPage));
    return () => {
      dispatch(setUserHistoryOrderLoadedAction(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  console.log(isUserHistoryLoaded);
  return isUserHistoryLoaded ? (
    <StatisticsPage
      userHistory={userHistory}
      numberPage={numberPage}
      setNumberPageHendler={setNumberPageHendler}
      userHistoryTotalPage={userHistoryTotalPage}
    />
  ) : (
    <Loading />
  );
};

export default StatisticsPageContainer;
