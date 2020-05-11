const reduce = require("../list_operations/reduce")

const length = (array) => reduce((accumulator, _) => accumulator + 1, 0, array)

exports.length = length
