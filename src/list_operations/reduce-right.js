const reduce = require("./reduce")
const reverse = require("../list_helpers/reverse")

const reduceRight = (reducer, initialVal, arr) =>
  reduce(reducer, initialVal, reverse(arr))

exports.reduceRight = reduceRight
