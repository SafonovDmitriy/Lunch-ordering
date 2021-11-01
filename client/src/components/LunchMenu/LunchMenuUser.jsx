import styled from "styled-components";

const DishWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 50px;
  align-items: center;
`;
const PhotoOfDishes = styled.img`
  width: 50px;
`;
const TitleOfDishes = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

const LunchMenuUser = ({ lunch: { index, _id, ...dishes } }) => {
  console.log("LunchMenuUser");

  return Object.values(dishes).map((dish) => (
    <DishWrapper key={dish._id}>
      <PhotoOfDishes
        src={`${process.env.REACT_APP_URL_SERVER}/${dish.image}`}
        alt={dish.image}
      />
      <TitleOfDishes>{dish.name}</TitleOfDishes>
    </DishWrapper>
  ));
};
export default LunchMenuUser;
