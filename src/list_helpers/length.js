const { reduce } = require("../list_operations/reduce")

const length = (list) => reduce((accumulator, _) => accumulator + 1, 0, list)

exports.length = length
