const reduce = (reducer, initialVal, array) => {
  var returnValue = initialVal

  for (let element of array) {
    returnValue = reducer(returnValue, element)
  }

  return returnValue
}

exports.reduce = reduce
