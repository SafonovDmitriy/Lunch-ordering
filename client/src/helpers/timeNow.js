import date from "date-and-time";

export const timeNow = () => date.format(new Date(), "HH:mm");
