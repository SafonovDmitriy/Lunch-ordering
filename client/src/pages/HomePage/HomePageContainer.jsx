import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { checkDeadlineTimes } from "../../helpers/checkDeadlineTimes";
import {
  canselSelectMenuAction,
  menuFormedTodayAction,
} from "../../redux/actions/lunchMenuAction";
import {
  deadlineForOrderingSelector,
  isMenuOpenSelector,
  lunchMenuSelector,
  selectMenuSelector,
  userLoadingSelector,
} from "../../redux/selectors";
import EndDeadlineTimesModal from "./EndDeadlineTimesModal";
import HomePage from "./HomePage";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const userLoading = useSelector(userLoadingSelector);
  const lunchMenu = useSelector(lunchMenuSelector);
  const isMenuOpen = useSelector(isMenuOpenSelector);
  const idSelectMenu = useSelector(selectMenuSelector);

  const deadlineForOrdering = useSelector(deadlineForOrderingSelector);

  const canselOrderHendler = () => {
    dispatch(canselSelectMenuAction());
  };
  const isEndDeadlineTimes = deadlineForOrdering
    ? checkDeadlineTimes(deadlineForOrdering)
    : false;

  const isBlur = !isMenuOpen || isEndDeadlineTimes;

  useEffect(() => {
    dispatch(menuFormedTodayAction());
  }, [dispatch]);

  if (isBlur) {
    return <EndDeadlineTimesModal />;
  }

  return !userLoading || !!Object.values(lunchMenu).length ? (
    <HomePage
      canselOrderHendler={canselOrderHendler}
      idSelectMenu={idSelectMenu}
    />
  ) : (
    <Loading />
  );
};

export default HomePageContainer;
