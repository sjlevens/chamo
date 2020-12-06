const { getIterableType } = require("../helpers")

const reduce = (reducer, initialVal, iterable) => {
  var returnValue = initialVal

  if (
    getIterableType(iterable) === "list" ||
    getIterableType(iterable) === "string"
  ) {
    let idx = 0
    for (let element of iterable) {
      returnValue = reducer(returnValue, element, idx)
      idx++
    }
  } else if (getIterableType(iterable) === "object") {
    for (let key in iterable) {
      returnValue = reducer(returnValue, iterable[key], key)
    }
  }

  return returnValue
}

exports.reduce = reduce
