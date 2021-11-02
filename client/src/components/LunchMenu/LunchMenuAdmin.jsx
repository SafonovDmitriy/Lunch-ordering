import styled from "styled-components";

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
const LunchMenuAdmin = ({ lunch, dishes, changeMenu }) => {
  const { index, _id, ...selectedDishes } = lunch;

  return Object.values(selectedDishes).map((selectDish) => {
    return (
      <DishWrapper key={selectDish._id}>
        <PhotoOfDishes
          src={`${process.env.REACT_APP_URL_SERVER}/${selectDish.image}`}
          alt={selectDish._id}
        />
        <SelectDish
          defaultValue={selectDish._id}
          onChange={(e) =>
            changeMenu({ e, dishType: selectDish.type, lunchId: _id })
          }
        >
          {dishes[selectDish.type].map((dish) => {
            return (
              <option key={dish._id} value={dish._id}>
                {dish.name}
              </option>
            );
          })}
        </SelectDish>
      </DishWrapper>
    );
  });
};
export default LunchMenuAdmin;
