import { NotificationManager } from "react-notifications";

export const showSuccessMessage = (message) => {
  NotificationManager.success(message);
};

export const showErrorMessage = ({
  response: {
    data: { message },
  },
}) => {
  NotificationManager.error(message);
};
