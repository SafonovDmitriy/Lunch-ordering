import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { menuFormedTodayAction } from "../../redux/actions/lunchMenuAction";
import {
  isMenuOpenSelector,
  lunchMenuSelector,
  userLoadingSelector,
} from "../../redux/selectors";
import HomePage from "./HomePage";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const userLoading = useSelector(userLoadingSelector);
  const lunchMenu = useSelector(lunchMenuSelector);
  const isMenuOpen = useSelector(isMenuOpenSelector);
  useEffect(() => {
    dispatch(menuFormedTodayAction());
  }, [dispatch]);
  return !userLoading || !!Object.values(lunchMenu).length ? (
    <HomePage isMenuOpen={isMenuOpen} />
  ) : (
    <Loading />
  );
};

export default HomePageContainer;
