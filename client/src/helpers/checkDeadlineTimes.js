import date from "date-and-time";
import { dateNow } from "./dateNow";
import { timeNow } from "./timeNow";

export const checkDeadlineTimes = (deadlineForOrdering) => {
  const today = date.parse(`${dateNow()} ${timeNow()}`, "DD.MM.YYYY HH:mm");
  const deadLineTimeMoment = date.parse(
    `${dateNow()} ${deadlineForOrdering}`,
    "DD.MM.YYYY HH:mm"
  );
  const timeBalanceToOrder = date
    .subtract(deadLineTimeMoment, today)
    .toSeconds();

  return timeBalanceToOrder < 0;
};
