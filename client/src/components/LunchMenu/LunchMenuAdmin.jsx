import PropTypes from "prop-types";
import React from "react";
import LunchMenuItemAdmin from "./LunchMenuItemAdmin";
import { dishType } from "./types";

const LunchMenuAdmin = ({
  lunch: { index, _id, ...selectedDishes },
  dishes,
  changeMenu,
}) => {
  console.log(`LunchMenuAdmin`);

  return Object.values(selectedDishes).map((selectDish) => (
    <LunchMenuItemAdmin
      key={selectDish._id}
      selectDish={selectDish}
      dishes={dishes}
      changeMenu={changeMenu}
      lunchId={_id}
    />
  ));
};

LunchMenuAdmin.propTypes = {
  lunch: dishType,
  dishes: PropTypes.shape({
    firstDish: PropTypes.arrayOf(dishType),
    secondDish: PropTypes.arrayOf(dishType),
    salad: PropTypes.arrayOf(dishType),
    drink: PropTypes.arrayOf(dishType),
  }),
  changeMenu: PropTypes.func,
};
export default LunchMenuAdmin;
