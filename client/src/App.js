import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header";
import { RootRouter } from "./components/Router";
import { userDataFetchAction } from "./redux/actions/userAction";
import { isUserIsEmptySelector } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isNotEmptyUser = useSelector(isUserIsEmptySelector);

  useEffect(() => {
    dispatch(userDataFetchAction());
  }, [dispatch]);

  return (
    <>
      {!isNotEmptyUser && <Header />}
      <RootRouter isNotEmptyUser={isNotEmptyUser} />
    </>
  );
};

export default App;
