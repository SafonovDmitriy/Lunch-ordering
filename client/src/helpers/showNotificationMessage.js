import { store as notificationStore } from "react-notifications-component";
const TIME_FOR_NOTIFICATION = 2000;
const congigForNotification = {
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: TIME_FOR_NOTIFICATION,
    onScreen: true,
  },
};
export const showSuccessMessage = (message = "") => {
  notificationStore.addNotification({
    title: "Success!",
    message,
    type: "success",
    ...congigForNotification,
  });
};

export const showErrorMessage = (message = "") => {
  notificationStore.addNotification({
    title: "Error",
    message,
    type: "danger",
    ...congigForNotification,
  });
};
