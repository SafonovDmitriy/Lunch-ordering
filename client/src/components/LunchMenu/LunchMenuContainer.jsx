import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectLunchMenuAction,
  lunchMenuFetchAction,
  selectLunchMenuAction,
} from "../../redux/actions/lunchMenuAction";
import {
  lunchMenuLoadingSelector,
  lunchMenuSelector,
  selectMenuSelector,
} from "../../redux/selectors";
import LunchMenuWrapper from "./LunchMenuWrapper";
import { useLocation } from "react-router";
import { NAVIGATION_MAP } from "../../constants";
import ModalWindowSelectMenu from "./ModalWindowSelectMenu";
const LunchMenuContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isAdmin = location.pathname === NAVIGATION_MAP.ADMIN_PAGE;

  const lunchMenu = useSelector(lunchMenuSelector);
  const selectMenu = useSelector(selectMenuSelector);
  const lunchMenuLoading = useSelector(lunchMenuLoadingSelector);
  const [desiredMenuSelection, setDesiredMenuSelection] = useState(null);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModalWindowHendler = () => {
    setIsOpenModal(false);
  };
  const openModalWindowHendler = () => {
    setIsOpenModal(true);
  };
  const selectLunchHendler = (lunchID) => {
    if (!selectMenu) {
      setDesiredMenuSelection(lunchID);
      openModalWindowHendler();
    }
  };
  useEffect(() => {
    dispatch(lunchMenuFetchAction());
    dispatch(getSelectLunchMenuAction());
  }, [dispatch]);

  useEffect(() => {
    setDesiredMenuSelection(selectMenu);
  }, [selectMenu]);

  const selectLunchMenuHendler = () => {
    dispatch(selectLunchMenuAction(desiredMenuSelection));
  };

  return (
    <>
      {!isAdmin && !selectMenu && !lunchMenuLoading && (
        <ModalWindowSelectMenu
          isOpenModal={isOpenModal}
          setDesiredMenuSelection={setDesiredMenuSelection}
          closeModalWindowHendler={closeModalWindowHendler}
          selectMenu={selectMenu}
          selectLunchMenuHendler={selectLunchMenuHendler}
        />
      )}
      {!lunchMenuLoading && lunchMenu.length && (
        <LunchMenuWrapper
          lunchMenu={lunchMenu}
          selectLunchHendler={selectLunchHendler}
          desiredMenuSelection={desiredMenuSelection}
          isAdmin={isAdmin}
        />
      )}
    </>
  );
};

export default LunchMenuContainer;
