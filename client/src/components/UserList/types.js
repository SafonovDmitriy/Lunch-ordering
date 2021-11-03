import PropTypes from "prop-types";

export const userType = PropTypes.shape({
  _id: PropTypes.string,
  email: PropTypes.string,
  balance: PropTypes.number,
});
