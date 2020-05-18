const { getIterableType } = require("../helpers")

const concat = (iterable, element, key) =>
  getIterableType(iterable) === "list"
    ? [...iterable, element]
    : getIterableType(iterable) === "string"
    ? iterable + element
    : { ...iterable, [key]: element }

exports.concat = concat
