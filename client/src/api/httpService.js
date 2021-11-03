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
  props = {},
}) => {
  return instance[method](url, {
    cancelToken: cancelToken.token,
    props,
  });
};
// eslint-disable-next-line no-unused-vars
const createCancelToken = () => {
  let cancelToken = new axios.CancelToken.source();
  return () => {
    if (cancelToken) cancelToken.cancel("");
    cancelToken = new axios.CancelToken.source();
    return cancelToken;
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
export const selectLunchMenuApi = (props) =>
  request({
    url: "/api/lunch-menu/select",
    method: METHODS_MAP.POST,
    props,
  });
export const getSelectLunchMenuApi = () =>
  request({ url: "/api/lunch-menu/select" });

export const updateLunchMenuApi = (props) =>
  request({ url: "/api/lunch-menu/put", method: METHODS_MAP.PUT, props });

// user-order-history
export const getUsersHistoryApi = (props) =>
  request({ url: "/api/user-order-history", props: { params: props } });

// /dish
export const getDishesApi = () => request({ url: "/api/dish" });

// /admin
export const getAllUsersApi = (props) =>
  request({ url: "/api/admin/users", props: { params: props } });
export const updateUserBalanceApi = (props) =>
  request({ url: "/api/admin/balance", method: METHODS_MAP.PUT, props });

export const shadeAnOrderApi = () => request({ url: "/api/admin/order" });

//example how use CancelToken
// const  instanceWithToken = createCancelToken();
// const request = () =>
//   requestCancel({
//     url
//     cancelToken: instanceWithToken(),
//   });
