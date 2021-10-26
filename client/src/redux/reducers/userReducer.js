const initialStore = {
  loading: false,
  userData: {},
};
const userReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "":
      break;

    default:
      return store;
  }
};
export default userReducer;
