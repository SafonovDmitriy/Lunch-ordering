import styled from "styled-components";
import { dishType } from "./types";

const DishWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const PhotoOfDishes = styled.img`
  width: 50px;
`;
const TitleOfDishes = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;
const PriceDish = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;
const TotalPrice = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 0 20px;
`;
const DishBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 50px;
  align-items: center;
`;

const LunchMenuUser = ({ lunch: { index, _id, ...dishes } }) => {
  const totalPriceDishes = Object.values(dishes).reduce(
    (acc, item) => (acc += item.price),
    0
  );
  return (
    <>
      {Object.values(dishes).map((dish) => (
        <DishWrapper key={dish._id}>
          <DishBox>
            <PhotoOfDishes
              src={`${process.env.REACT_APP_URL_SERVER}/${dish.image}`}
              alt={dish.image}
            />
            <TitleOfDishes>{dish.name}</TitleOfDishes>
          </DishBox>

          <PriceDish children={<span>{dish.price}&#8372;</span>} />
        </DishWrapper>
      ))}
      <TotalPrice
        children={<span>{`Total Price: ${totalPriceDishes}`}&#8372;</span>}
      />
    </>
  );
};
LunchMenuUser.propTypes = {
  lunch: dishType,
};
export default LunchMenuUser;
