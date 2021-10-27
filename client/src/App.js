import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NAVIGATION_PATH } from "./constants";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route component={<></>} path={NAVIGATION_PATH.HOME_PAGE} /> */}
        {/* <Route component={<></>} path={NAVIGATION_PATH.STATISTICS_PAGE} /> */}
        {/* <Route component={<></>} path={NAVIGATION_PATH.ADMIN_PAGE} /> */}
        <Route component={LoginPage} path={NAVIGATION_PATH.LOGIN_PAGE} />
        {/* <Route component={<></>} path={NAVIGATION_PATH.REGISTRATION_PAGE} /> */}
        {/* <Route component={<></>} path={NAVIGATION_PATH.VERIFICATION_PAGE} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
// export const NAVIGATION_PATH = {
//   HOME_PAGE: "/",
//   STATISTICS_PAGE: "/statistics",
//   ADMIN_PAGE: "/admin",
//   LOGIN_PAGE: "/signIn",
//   REGISTRATION_PAGE: "/signUp",
//   VERIFICATION_PAGE: "/verification",
// };
