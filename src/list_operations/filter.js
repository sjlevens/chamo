const { reduce } = require("./reduce")
const { append } = require("../list_helpers/append")
const { maybeCurried } = require("../function_helpers/maybe-curried")

const filter = maybeCurried(
  (predicate, array) =>
    reduce(
      (accumulator, currentElement) =>
        predicate(currentElement)
          ? append(accumulator, currentElement)
          : accumulator,
      [],
      array
    ),
  2
)

exports.filter = filter
