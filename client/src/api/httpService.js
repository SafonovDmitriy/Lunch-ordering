import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const METHODS_MAP = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export const request = ({ url, method = METHODS_MAP.GET, props = {} }) =>
  instance[method](url, props);

export const requestCancel = ({
  url,
  method = METHODS_MAP.GET,
  cancelToken,
  props,
}) => {
  return method !== METHODS_MAP.GET
    ? instance[method](url, props, { cancelToken: cancelToken.token })
    : instance[method](url, { ...props, cancelToken: cancelToken.token });
};

// eslint-disable-next-line no-unused-vars
const createCancelToken = () => {
  let cancelTokenSource = new axios.CancelToken.source();
  return () => {
    if (cancelTokenSource) cancelTokenSource.cancel();
    cancelTokenSource = new axios.CancelToken.source();
    return cancelTokenSource;
  };
};

// auth
export const authorizationApi = (form) =>
  request({ url: "/api/auth/authorization", props: { params: form } });
export const logoutApi = () => request({ url: "/api/user/logout" });
export const verifyApi = (form) =>
  request({ url: "/api/auth/verify", props: { params: form } });

export const registrationApi = (form) =>
  request({
    url: "/api/auth/registration",
    method: METHODS_MAP.POST,
    props: form,
  });

//lunch-menu
export const fetchUserApi = () => request({ url: "/api/user" });
export const fetchLunchMenuApi = () => request({ url: "/api/lunch-menu" });

const selectLunchMenuApiToken = createCancelToken();
export const selectLunchMenuApi = (props) =>
  requestCancel({
    url: "/api/lunch-menu/select",
    method: METHODS_MAP.POST,
    cancelToken: selectLunchMenuApiToken(),
    props,
  });
export const getSelectLunchMenuApi = () =>
  request({ url: "/api/lunch-menu/select" });

export const updateLunchMenuApi = (props) =>
  request({ url: "/api/lunch-menu/put", method: METHODS_MAP.PUT, props });

export const canselSelectMenuApi = () =>
  request({
    url: "/api/lunch-menu/cansel-select-menu",
    method: METHODS_MAP.POST,
  });

// user-order-history
const getUsersHistoryApiToken = createCancelToken();
export const getUsersHistoryApi = (props) =>
  requestCancel({
    url: "/api/user-order-history",
    cancelToken: getUsersHistoryApiToken(),
    props: { params: props },
  });

// /dish
export const getDishesApi = () => request({ url: "/api/dish" });

// /admin
const getAllUsersApiToken = createCancelToken();
export const getAllUsersApi = (props) =>
  requestCancel({
    url: "/api/admin/users",
    props: { params: props },
    cancelToken: getAllUsersApiToken(),
  });
export const updateUserBalanceApi = (props) =>
  request({ url: "/api/admin/balance", method: METHODS_MAP.PUT, props });

export const placeAnOrderApi = () => request({ url: "/api/admin/order" });

// /formed-menu
export const menuFormedTodayApi = () =>
  request({
    url: "/api/formed-menu/",
  });

export const openMenuApi = () =>
  request({
    url: "/api/formed-menu/",
    method: METHODS_MAP.PUT,
  });

export const saveNewTimeForOrderApi = (props) =>
  request({
    url: "/api/formed-menu/deadline-time",
    method: METHODS_MAP.POST,
    props,
  });
