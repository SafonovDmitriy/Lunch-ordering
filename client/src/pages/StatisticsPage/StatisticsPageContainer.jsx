import React, { useEffect, useState } from "react";
import StatisticsPage from "./StatisticsPage";
import { useDispatch, useSelector } from "react-redux";
import { getUserHistoryOrderAction } from "../../redux/actions/userHistoryOrderAction";
import {
  userHistoryLoadedSelector,
  userHistoryLoadingSelector,
  userHistorySelector,
  userHistoryTotalPageSelector,
} from "../../redux/selectors";
import { Loading } from "../../components/Loading";

const StatisticsPageContainer = () => {
  const dispatch = useDispatch();
  const [numberPage, setNumberPage] = useState(0);

  const userHistory = useSelector(userHistorySelector);
  const isUserHistoryLoading = useSelector(userHistoryLoadingSelector);
  const isUserHistoryLoaded = useSelector(userHistoryLoadedSelector);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return !isUserHistoryLoading && isUserHistoryLoaded ? (
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
