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
};

export const request = ({ url, method = METHODS_MAP.GET, props = {} }) => {
  return instance[method](url, props);
};

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

export const fetchUserApi = () => request({ url: "/api/user" });

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

//example how use CancelToken
// const  instanceWithToken = createCancelToken();
// const request = () =>
//   requestCancel({
//     url
//     cancelToken: instanceWithToken(),
//   });
