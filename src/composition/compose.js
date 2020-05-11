const { feed } = require("../function_helpers/feed")
const { reduceRight } = require("../list_operations/reduce-right")

const compose = (...fns) => (input) => reduceRight(feed, input, fns)

exports.compose = compose
