import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { NAVIGATION_MAP } from "../../constants";
import {
  dishesFetchAction,
  setDishesLoadedAction,
} from "../../redux/actions/dishesAction";
import {
  getSelectLunchMenuAction,
  lunchMenuFetchAction,
  selectLunchMenuAction,
  setLunchMenuLoadedAction,
} from "../../redux/actions/lunchMenuAction";
import {
  isLunchMenuLoadedSelector,
  lunchMenuSelector,
  selectMenuSelector,
} from "../../redux/selectors";
import { Loading } from "../Loading";
import LunchMenuWrapper from "./LunchMenuWrapper";
import ModalWindowSelectMenu from "./ModalWindowSelectMenu";
const LunchMenuContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isAdmin = location.pathname === NAVIGATION_MAP.ADMIN_PAGE;

  const lunchMenu = useSelector(lunchMenuSelector);
  const selectMenu = useSelector(selectMenuSelector);
  const isLunchMenuLoaded = useSelector(isLunchMenuLoadedSelector);

  const [desiredMenuSelection, setDesiredMenuSelection] = useState(null);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const setDesiredMenuSelectionHendler = (lunchID) => {
    setDesiredMenuSelection(lunchID);
  };

  const closeModalWindowHendler = () => {
    setIsOpenModal(false);
  };
  const openModalWindowHendler = () => {
    setIsOpenModal(true);
  };

  const selectLunchHendler = (lunchID) => {
    if (!selectMenu) {
      setDesiredMenuSelectionHendler(lunchID);
      openModalWindowHendler();
    }
  };

  useEffect(() => {
    dispatch(lunchMenuFetchAction());
    dispatch(getSelectLunchMenuAction());
    if (isAdmin) dispatch(dishesFetchAction());
    return () => {
      if (isAdmin) dispatch(setDishesLoadedAction(false));
      dispatch(setLunchMenuLoadedAction(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setDesiredMenuSelectionHendler(selectMenu);
  }, [selectMenu]);

  const selectLunchMenuHendler = () => {
    dispatch(selectLunchMenuAction(desiredMenuSelection));
  };

  return isLunchMenuLoaded ? (
    <>
      {!isAdmin && isOpenModal && !selectMenu && (
        <ModalWindowSelectMenu
          setDesiredMenuSelectionHendler={setDesiredMenuSelectionHendler}
          closeModalWindowHendler={closeModalWindowHendler}
          selectLunchMenuHendler={selectLunchMenuHendler}
        />
      )}

      <LunchMenuWrapper
        lunchMenu={lunchMenu}
        selectLunchHendler={selectLunchHendler}
        desiredMenuSelection={desiredMenuSelection}
        isAdmin={isAdmin}
      />
    </>
  ) : (
    <Loading />
  );
};

export default LunchMenuContainer;
