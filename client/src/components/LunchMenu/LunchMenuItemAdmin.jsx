import PropTypes from "prop-types";
import styled from "styled-components";
import { dishType } from "./types";

const DishWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PhotoOfDishes = styled.img`
  width: 50px;
`;
const SelectDish = styled.select`
  width: 80%;
`;
const LunchMenuItemAdmin = ({
  selectDish: {
    _id: selectDishId,
    image: selectDishImage,
    type: selectDishType,
  },
  dishes,
  changeMenu,
  lunchId,
}) => {
  console.log(`LunchMenuItemAdmin`);

  return (
    <DishWrapper>
      <PhotoOfDishes
        src={`${process.env.REACT_APP_URL_SERVER}/${selectDishImage}`}
        alt={selectDishId}
      />
      <SelectDish
        defaultValue={selectDishId}
        onChange={(e) => changeMenu({ e, dishType: selectDishType, lunchId })}
      >
        {dishes[selectDishType].map((dish) => {
          return (
            <option key={dish._id} value={dish._id}>
              {dish.name}
            </option>
          );
        })}
      </SelectDish>
    </DishWrapper>
  );
};
LunchMenuItemAdmin.propTypes = {
  selectDish: dishType,
  changeMenu: PropTypes.func,
  lunchId: PropTypes.string,
  dishes: PropTypes.shape({
    firstDish: PropTypes.arrayOf(dishType),
    secondDish: PropTypes.arrayOf(dishType),
    salad: PropTypes.arrayOf(dishType),
    drink: PropTypes.arrayOf(dishType),
  }),
};

export default LunchMenuItemAdmin;
