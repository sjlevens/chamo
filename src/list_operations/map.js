const { reduce } = require("./reduce")
const { maybeCurried } = require("../function_helpers/maybe-curried")
const { append } = require("../list_helpers/append")

const map = maybeCurried(
  (mapper, array) =>
    reduce(
      (accumulator, currentElement) =>
        append(accumulator, mapper(currentElement)),
      [],
      array
    ),
  2
)

exports.map = map
