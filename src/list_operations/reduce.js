const { getIterableType } = require("../helpers")

const reduce = (reducer, initialVal, iterable) => {
  let returnValue = initialVal

  if(iterable.forEach) {
    let idx = 0
    iterable.forEach(element => {
      returnValue = reducer(returnValue, element, idx)
      idx++
    })
  } else if (getIterableType(iterable) === "object") {
    for (const key in iterable) {
      returnValue = reducer(returnValue, iterable[key], key)
    }
  } else {
    let idx = 0
    for (let element of iterable) {
      returnValue = reducer(returnValue, element, idx)
      idx++
    }
  }

  return returnValue
}

exports.reduce = reduce
