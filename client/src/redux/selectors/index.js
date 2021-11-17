import { USER_ROLE_MAP } from "../../constants";

export const isUserIsEmptySelector = (state) =>
  !Object.keys(state.user.userData).length;
export const userRoleSelector = (state) => state.user.userData.role;
export const userIdSelector = (state) => state.user.userData._id;
export const isAdminSelector = (state) =>
  state.user.userData.role === USER_ROLE_MAP.ADMIN;
export const userEmailSelector = (state) => state.user.userData.email;
export const userBalanceSelector = (state) => state.user.userData.balance;
export const userLoadingSelector = (state) => state.user.loading;

export const lunchMenuSelector = (state) => state.lunchMenu.lunchMenu;
export const isLunchMenuLoadedSelector = (state) => state.lunchMenu.loaded;
export const selectMenuSelector = (state) => state.lunchMenu.selectMenu;
export const deadlineForOrderingSelector = (state) =>
  state.lunchMenu.deadlineForOrdering;
export const isMenuOpenSelector = (state) => state.lunchMenu.isMenuOpen;

export const userHistorySelector = (state) => state.historyOrder.userHistory;
export const isUserHistoryLoadedSelector = (state) => state.historyOrder.loaded;
export const userHistoryTotalPageSelector = (state) =>
  state.historyOrder.totalPage;

export const dishesDataSelector = (state) => state.dishes.dishes;
export const isDishesloadedSelector = (state) => state.dishes.loaded;

export const usersSelector = (state) => state.admin.users.data;
export const usersTotalPageSelector = (state) => state.admin.users.totalPage;
export const isUsersLoadedSelector = (state) => state.admin.users.loaded;
