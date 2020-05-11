const { compose } = require("./src/composition")
const { filter, map, reduce, reduceRight } = require("./src/list_operations")
const {
  append,
  length,
  listOf,
  prepend,
  reverse,
} = require("./src/list_helpers")
const { feed, maybeCurried } = require("./src/function_helpers")

module.exports = {
  reduce,
  reduceRight,
  compose,
  map,
  filter,
  append,
  length,
  listOf,
  prepend,
  reverse,
  feed,
  maybeCurried,
}
