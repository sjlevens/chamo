const { reduce } = require("../list_operations/reduce")
const { prepend } = require("./prepend")

const reverse = (array) => reduce(prepend, [], array)

exports.reverse = reverse
