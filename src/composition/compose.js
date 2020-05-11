const feed = require("../function_helpers/feed")
const listOf = require("../list_helpers/list-of")

const compose = (...fns) => (input) => reduceRight(feed, input, listOf(fns))

exports.compose = compose
