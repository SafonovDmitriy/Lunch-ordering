import date from "date-and-time";

export const dateNow = () => date.format(new Date(), "DD.MM.YYYY");
