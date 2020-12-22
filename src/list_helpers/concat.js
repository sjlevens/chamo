const { getIterableType } = require("../helpers")

const concat = (iterable, element, key) => {
  let returnValue = iterable

  if(returnValue.push) {
    returnValue.push('element')
    return returnValue
  }

  getIterableType(iterable) === "string"
    ? returnValue += element
    : returnValue[key] = element
  
  return returnValue
}

exports.concat = concat
