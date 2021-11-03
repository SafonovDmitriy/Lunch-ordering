import PropTypes from "prop-types";

export const dishType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(["firstDish", "secondDish", "salad", "drink"]),
  image: PropTypes.string,
});
export const lunchMenuItemType = PropTypes.shape({
  _id: PropTypes.string,
  index: PropTypes.number,
  drink: dishType,
  firstDish: dishType,
  secondDish: dishType,
  salad: dishType,
});

export const lunchMenuType = PropTypes.arrayOf(lunchMenuItemType);
