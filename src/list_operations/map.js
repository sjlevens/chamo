const { reduce } = require("./reduce")
const { maybeCurried } = require("../function_helpers/maybe-curried")
const { concat } = require("../list_helpers/concat")
const { initialValueFrom } = require("../helpers")

const map = maybeCurried(
  (mapper, iterable) =>
    reduce(
      (accumulator, currentElement, key) =>
        concat(accumulator, mapper(currentElement, key), key),
      initialValueFrom(iterable),
      iterable
    ),
  2
)

exports.map = map
