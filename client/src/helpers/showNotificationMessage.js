import { NotificationManager } from "react-notifications";

export const showSuccessMessage = (message) => {
  NotificationManager.success(message);
};
export const showErrorMessage = ({ response }) => {
  NotificationManager.error(response?.data?.message);
};
