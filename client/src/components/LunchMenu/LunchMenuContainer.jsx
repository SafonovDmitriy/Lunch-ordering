import React from "react";
import { useSelector } from "react-redux";
import { lunchMenuSelector } from "../../redux/selectors";
import LunchMenuWrapper from "./LunchMenuWrapper";
const LunchMenuContainer = () => {
  const lunchMenu = useSelector(lunchMenuSelector);

  return <LunchMenuWrapper lunchMenu={lunchMenu} />;
};

export default LunchMenuContainer;
