import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDishAction } from "../../redux/actions/dishesAction";
import {
  dishesDataSelector,
  isDishesloadedSelector,
} from "../../redux/selectors";
import { Loading } from "../Loading";
import LunchMenuAdmin from "./LunchMenuAdmin";
import { dishType } from "./types";
const LunchMenuAdminContainer = (props) => {
  const dispatch = useDispatch();
  const dishes = useSelector(dishesDataSelector);

  const isDishesLoaded = useSelector(isDishesloadedSelector);

  const changeMenu = ({
    e: {
      target: { value: dishId },
    },
    dishType,
    lunchId,
  }) => {
    dispatch(updateDishAction({ dishId, dishType, lunchId }));
  };

  return isDishesLoaded ? (
    <LunchMenuAdmin {...props} dishes={dishes} changeMenu={changeMenu} />
  ) : (
    <Loading />
  );
};
LunchMenuAdminContainer.propTypes = {
  lunch: dishType,
};
export default LunchMenuAdminContainer;
