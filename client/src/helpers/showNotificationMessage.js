import { store as notificationStore } from "react-notifications-component";
const TIME_FOR_NOTIFICATION = 2000;
const congigForNotification = {
  insert: "bottom",
  container: "bottom-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
};
const dismissForNotification = {
  pauseOnHover: true,
  timingFunction: "ease-out",
  onScreen: true,
};
export const showSuccessMessage = (
  message = "",
  customeDuration = TIME_FOR_NOTIFICATION
) => {
  notificationStore.addNotification({
    title: "Success!",
    message,
    type: "success",
    ...congigForNotification,
    dismiss: {
      duration: customeDuration,
      ...dismissForNotification,
    },
  });
};

export const showErrorMessage = (
  message = "",
  customeDuration = TIME_FOR_NOTIFICATION
) => {
  notificationStore.addNotification({
    title: "Error",
    message,
    type: "danger",
    ...congigForNotification,
    dismiss: {
      duration: customeDuration,
      ...dismissForNotification,
    },
  });
};
