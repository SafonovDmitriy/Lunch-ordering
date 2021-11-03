import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LunchMenuAdmin from "./LunchMenuAdmin";
import { updateDishAction } from "../../redux/actions/dishesAction";
import {
  dishesDataSelector,
  isDishesloadingSelector,
} from "../../redux/selectors";
import { dishType } from "./types";
const LunchMenuAdminContainer = (props) => {
  const dispatch = useDispatch();
  const dishes = useSelector(dishesDataSelector);
  const dishesLoading = useSelector(isDishesloadingSelector);
  const changeMenu = ({
    e: {
      target: { value: dishId },
    },
    dishType,
    lunchId,
  }) => {
    dispatch(updateDishAction({ dishId, dishType, lunchId }));
  };

  return (
    !dishesLoading && (
      <LunchMenuAdmin {...props} dishes={dishes} changeMenu={changeMenu} />
    )
  );
};
LunchMenuAdminContainer.propTypes = {
  lunch: dishType,
};
export default LunchMenuAdminContainer;
