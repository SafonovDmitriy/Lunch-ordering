import styled from "styled-components";

const DishWrapper = styled.div``;

const LunchMenuAdmin = ({ lunch }) => {
  const { index, _id, ...dishes } = lunch;
  console.log(`dishes`, dishes);
  return Object.values(dishes).map((dish) => (
    <DishWrapper key={dish._id}>
      <h1>{dish.name}</h1>
    </DishWrapper>
  ));
};
export default LunchMenuAdmin;
