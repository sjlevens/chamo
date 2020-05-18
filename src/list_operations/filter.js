const { reduce } = require("./reduce")
const { concat } = require("../list_helpers/concat")
const { maybeCurried } = require("../function_helpers/maybe-curried")
const { initialValueFrom } = require("../helpers")

const filter = maybeCurried(
  (predicate, iterable) =>
    reduce(
      (accumulator, currentElement, key) =>
        predicate(currentElement)
          ? concat(accumulator, currentElement, key)
          : accumulator,
      initialValueFrom(iterable),
      iterable
    ),
  2
)

exports.filter = filter
