export const NAVIGATION_MAP = {
  HOME_PAGE: "/",
  STATISTICS_PAGE: "/statistics",
  ADMIN_PAGE: "/admin",
  LOGIN_PAGE: "/signIn",
  REGISTRATION_PAGE: "/signUp",
  VERIFICATION_PAGE: "/verification",
};

export const USER_ROLE_MAP = {
  admin: "ADMIN",
  user: "USER",
};

export const STATUS_ERRORS = {
  UNAUTHORIZED: 401,
};
export const VALIDATION_MASSAGES = {
  REQUIRED: (name) => `The ${name} field must be filled`,
  VALIDATION_EMAIL: "In this field there must be an existing email",
  SAME_FIELD: "Confirming password does not meet the original password",
  MIN_LENGTH: (min) => `The minimum length of this field is ${min} characters`,
  MAX_LENGTH: (max) => `The maximum length of this field is ${max} characters`,
};
