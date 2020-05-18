const { reduce } = require("../list_operations/reduce")
const { prepend } = require("./prepend")

const reverse = (list) => reduce(prepend, [], list)

exports.reverse = reverse
