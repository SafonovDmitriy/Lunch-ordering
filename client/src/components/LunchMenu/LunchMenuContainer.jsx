import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { NAVIGATION_MAP } from "../../constants";
import { dishesFetchAction } from "../../redux/actions/dishesAction";
import {
  getSelectLunchMenuAction,
  lunchMenuFetchAction,
  selectLunchMenuAction,
} from "../../redux/actions/lunchMenuAction";
import {
  isLunchMenuLoadingSelector,
  lunchMenuSelector,
  selectMenuSelector,
} from "../../redux/selectors";
import LunchMenuWrapper from "./LunchMenuWrapper";
import ModalWindowSelectMenu from "./ModalWindowSelectMenu";

const LunchMenuContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isAdmin = location.pathname === NAVIGATION_MAP.ADMIN_PAGE;

  const lunchMenu = useSelector(lunchMenuSelector);
  const selectMenu = useSelector(selectMenuSelector);
  const isLunchMenuLoading = useSelector(isLunchMenuLoadingSelector);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setDesiredMenuSelectionHendler(selectMenu);
  }, [selectMenu]);

  const selectLunchMenuHendler = () => {
    dispatch(selectLunchMenuAction(desiredMenuSelection));
  };

  return (
    !isLunchMenuLoading && (
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
    )
  );
};

export default LunchMenuContainer;
