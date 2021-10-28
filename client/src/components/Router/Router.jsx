import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NAVIGATION_MAP } from "../../constants";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { VerificationPage } from "../../pages/VerificationPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={HomePage} path={NAVIGATION_MAP.HOME_PAGE} />
        {/* <Route component={<></>} path={NAVIGATION_MAP.STATISTICS_PAGE} /> */}
        {/* <Route component={<></>} path={NAVIGATION_MAP.ADMIN_PAGE} /> */}
        <Route component={LoginPage} path={NAVIGATION_MAP.LOGIN_PAGE} />
        <Route
          component={RegistrationPage}
          path={NAVIGATION_MAP.REGISTRATION_PAGE}
        />
        <Route
          component={VerificationPage}
          path={`${NAVIGATION_MAP.VERIFICATION_PAGE}/:email`}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
