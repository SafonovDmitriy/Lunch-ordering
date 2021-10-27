import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NAVIGATION_PATH } from "./constants";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { VerificationPage } from "./pages/VerificationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route component={<></>} path={NAVIGATION_PATH.HOME_PAGE} /> */}
        {/* <Route component={<></>} path={NAVIGATION_PATH.STATISTICS_PAGE} /> */}
        {/* <Route component={<></>} path={NAVIGATION_PATH.ADMIN_PAGE} /> */}
        <Route component={LoginPage} path={NAVIGATION_PATH.LOGIN_PAGE} />
        <Route
          component={RegistrationPage}
          path={NAVIGATION_PATH.REGISTRATION_PAGE}
        />
        <Route
          component={VerificationPage}
          path={`${NAVIGATION_PATH.VERIFICATION_PAGE}/:email`}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
