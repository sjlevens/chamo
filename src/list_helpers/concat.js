const { getIterableType } = require("../helpers")

const concat = (iterable, element, key) => {
  let returnValue = iterable

  if(returnValue.push) {
    returnValue.push(element)
  } else if(getIterableType(iterable) === "string") {
    returnValue += element
  } else {
    returnValue[key] = element
  }
  
  return returnValue
}

exports.concat = concat
