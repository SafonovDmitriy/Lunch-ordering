import { ROLE_MAP } from "../../constants";

const initialStore = {
  loading: false,
  userData: {
    email: "test@email.com",
    balance: 1000,
    role: ROLE_MAP.admin,
  },
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
