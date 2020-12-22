const { reduce } = require("../list_operations/reduce")
const { add } = require('../math_operations/add')

const length = (list) => reduce(add(1), 0, list)

exports.length = length
