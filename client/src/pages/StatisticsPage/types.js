import PropTypes from "prop-types";

export const userHistoryItemType = PropTypes.shape({
  id: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
});
export const userHistoryType = PropTypes.arrayOf(userHistoryItemType);
