const { getIterableType } = require("./get-iterable-type")

const initialValueFrom = (iterable) =>
  getIterableType(iterable) === "list"
    ? []
    : getIterableType(iterable) === "string"
    ? ""
    : {}

exports.initialValueFrom = initialValueFrom
