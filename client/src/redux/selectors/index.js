export const userIsEmptySelector = (state) =>
  !Object.keys(state.user.userData).length;
export const userRoleSelector = (state) => state.user.userData.role;
export const userEmailSelector = (state) => state.user.userData.email;
export const userBalanceSelector = (state) => state.user.userData.balance;
export const userLoadingSelector = (state) => state.user.loading;
