import { USER_ROLE_MAP } from "../../constants";

export const isUserIsEmptySelector = (state) =>
  !Object.keys(state.user.userData).length;
export const userRoleSelector = (state) => state.user.userData.role;
export const isAdminSelector = (state) =>
  state.user.userData.role === USER_ROLE_MAP.admin;
export const userEmailSelector = (state) => state.user.userData.email;
export const userBalanceSelector = (state) => state.user.userData.balance;
export const userLoadingSelector = (state) => state.user.loading;

export const lunchMenuSelector = (state) => state.lunchMenu.lunchMenu;
export const isLunchMenuLoadingSelector = (state) => state.lunchMenu.loading;
export const selectMenuSelector = (state) => state.lunchMenu.selectMenu;

export const userHistorySelector = (state) => state.historyOrder.userHistory;
export const isUserHistoryLoadingSelector = (state) =>
  state.historyOrder.loading;
export const isUserHistoryLoadedSelector = (state) => state.historyOrder.loaded;
export const userHistoryTotalPageSelector = (state) => state.historyOrder.total;

export const dishesDataSelector = (state) => state.dishes.dishes;
export const isDishesloadingSelector = (state) => state.dishes.loading;

export const usersSelector = (state) => state.admin.users.data;
export const usersTotalPageSelector = (state) => state.admin.users.total;
export const isUsersLoadedSelector = (state) => state.admin.users.loaded;
