export const required = (text) => !text.trim().length;
export const minlength = (text, { min }) => text.trim().length < min;
export const maxlength = (text, { max }) => text.trim().length > max;
export const isChecked = (value) => !value;
export const validateEmail = (email) =>
  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  );
