const chunk = (arr, size, page) => {
  const startIndex = page * size;
  return [...arr].splice(startIndex, size);
};
module.exports = chunk;
