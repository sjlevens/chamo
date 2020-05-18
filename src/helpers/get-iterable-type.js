const getIterableType = (iterable) =>
  Array.isArray(iterable)
    ? "list"
    : typeof iterable === "string"
    ? "string"
    : typeof iterable === "object"
    ? "object"
    : "non-iterable"

exports.getIterableType = getIterableType
