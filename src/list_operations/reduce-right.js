const { reduce } = require("./reduce")
const { reverse } = require("../list_helpers/reverse")

const reduceRight = (reducer, initialVal, iterable) =>
  reduce(reducer, initialVal, reverse(iterable))

exports.reduceRight = reduceRight
