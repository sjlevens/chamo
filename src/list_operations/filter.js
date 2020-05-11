const reduce = require("./reduce")
const append = require("../list_helpers/append")

const filter = maybeCurried(
  (predicate, array) =>
    reduce(
      (accumulator, currentElement) =>
        predicate(currentElement)
          ? append(currentElement, accumulator)
          : accumulator,
      [],
      array
    ),
  2
)

exports.filter = filter
