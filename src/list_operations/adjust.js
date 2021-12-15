const { maybeCurried } = require("../function_helpers/maybe-curried");

const adjust = maybeCurried((index, fn, list) => {
  const copy = list;
  copy[index] = fn(copy[index]);
  return copy;
}, 3);

exports.adjust = adjust;
