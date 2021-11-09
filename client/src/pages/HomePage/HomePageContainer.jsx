import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { lunchMenuSelector, userLoadingSelector } from "../../redux/selectors";
import HomePage from "./HomePage";

const HomePageContainer = () => {
  const userLoading = useSelector(userLoadingSelector);
  const lunchMenu = useSelector(lunchMenuSelector);

  return !userLoading || !!Object.values(lunchMenu).length ? (
    <HomePage />
  ) : (
    <Loading />
  );
};

export default HomePageContainer;
