const reduce = require("./reduce")
const maybeCurried = require("../function_helpers/maybe-curried")

const map = maybeCurried(
  (mapper, array) =>
    reduce(
      (accumulator, currentElement) =>
        append(mapper(currentElement), accumulator),
      [],
      array
    ),
  2
)

exports.map = map
