import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lunchMenuFetchAction } from "../../redux/actions/lunchMenuAction";
import {
  lunchMenuLoadingSelector,
  userLoadingSelector,
} from "../../redux/selectors";
import HomePage from "./HomePage";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const userLoading = useSelector(userLoadingSelector);
  const lunchMenuLoading = useSelector(lunchMenuLoadingSelector);

  useEffect(() => {
    dispatch(lunchMenuFetchAction());
  }, [dispatch]);

  return !userLoading && !lunchMenuLoading && <HomePage />;
};

export default HomePageContainer;
