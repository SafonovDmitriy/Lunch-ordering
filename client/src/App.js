import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootRouter } from "./components/Router";
import { userFetch } from "./redux/actions/userAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetch());
  }, [dispatch]);

  return <RootRouter />;
};

export default App;
