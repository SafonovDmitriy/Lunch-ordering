import React, { useEffect } from "react";
import {
  dishesFetchAction,
  updateDishAction,
} from "../../redux/actions/dishesAction";
import LunchMenuAdmin from "./LunchMenuAdmin";
import { useDispatch, useSelector } from "react-redux";
import {
  dishesDataSelector,
  dishesloadingSelector,
} from "../../redux/selectors";
const LunchMenuAdminContainer = (props) => {
  const dispatch = useDispatch();
  const dishes = useSelector(dishesDataSelector);
  const dishesLoading = useSelector(dishesloadingSelector);
  const changeMenu = ({
    e: {
      target: { value: dishId },
    },
    dishType,
    lunchId,
  }) => {
    dispatch(updateDishAction({ dishId, dishType, lunchId }));
  };
  useEffect(() => {
    dispatch(dishesFetchAction());
  }, [dispatch]);

  return (
    !dishesLoading && (
      <LunchMenuAdmin {...props} dishes={dishes} changeMenu={changeMenu} />
    )
  );
};

export default LunchMenuAdminContainer;
