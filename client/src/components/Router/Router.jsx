import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { NAVIGATION_MAP } from "../../constants";
import { AdminPage } from "../../pages/AdminPage";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { StatisticsPage } from "../../pages/StatisticsPage";
import { VerificationPage } from "../../pages/VerificationPage";
import { userDataFetchAction } from "../../redux/actions/userAction";
import {
  userIsEmptySelector,
  userLoadingSelector,
} from "../../redux/selectors";
import { Header } from "../Header";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDataFetchAction());
  }, [dispatch]);

  const userLoading = useSelector(userLoadingSelector);
  const isEmptyUser = useSelector(userIsEmptySelector);

  if (userLoading) {
    return null;
  }
  return isEmptyUser ? (
    <Switch>
      <Route component={LoginPage} path={NAVIGATION_MAP.LOGIN_PAGE} />
      <Route
        component={RegistrationPage}
        path={NAVIGATION_MAP.REGISTRATION_PAGE}
      />
      <Route path={`${NAVIGATION_MAP.VERIFICATION_PAGE}/:email`}>
        <VerificationPage />
      </Route>
      <Redirect to={NAVIGATION_MAP.LOGIN_PAGE} />
    </Switch>
  ) : (
    <>
      <Header />
      <Switch>
        <Route exact c path={NAVIGATION_MAP.HOME_PAGE}>
          <HomePage />
        </Route>
        <Route path={NAVIGATION_MAP.STATISTICS_PAGE}>
          <StatisticsPage />
        </Route>
        <Route path={NAVIGATION_MAP.ADMIN_PAGE}>
          <AdminPage />
        </Route>
        <Redirect to={NAVIGATION_MAP.HOME_PAGE} />
      </Switch>
    </>
  );
};
export default Router;
