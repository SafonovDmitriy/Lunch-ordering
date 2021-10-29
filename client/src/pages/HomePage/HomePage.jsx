import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userLoadingSelector } from "../../redux/selectors";
const HomePageWrapper = styled.div``;
const LunchMenuWrapper = styled.div``;
const HomePage = () => {
  const userLoading = useSelector(userLoadingSelector);

  return !userLoading && <HomePageWrapper></HomePageWrapper>;
};
export default HomePage;
