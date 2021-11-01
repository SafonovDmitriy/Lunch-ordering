import React from "react";
import { useSelector } from "react-redux";
import { userLoadingSelector } from "../../redux/selectors";
import HomePage from "./HomePage";

const HomePageContainer = () => {
  const userLoading = useSelector(userLoadingSelector);

  return !userLoading && <HomePage />;
};

export default HomePageContainer;
