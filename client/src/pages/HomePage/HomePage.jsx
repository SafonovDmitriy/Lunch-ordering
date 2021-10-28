import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userFetch } from "../../redux/actions/userAction";
import { userLoadingSelector } from "../../redux/selectors";
const HomePageWrapper = styled.div``;
const LunchMenuWrapper = styled.div``;
const HomePage = () => {
  const dispatch = useDispatch();
  const userLoading = useSelector(userLoadingSelector);
  useEffect(() => {
    dispatch(userFetch());
  }, [dispatch]);

  return !userLoading && <HomePageWrapper></HomePageWrapper>;
};
export default HomePage;
