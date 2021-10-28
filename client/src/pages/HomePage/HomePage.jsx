import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userFetch } from "../../redux/actions/userAction";
const HomePageWrapper = styled.div``;
const LunchMenuWrapper = styled.div``;
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetch());
  }, [dispatch]);

  return <HomePageWrapper></HomePageWrapper>;
};
export default HomePage;
