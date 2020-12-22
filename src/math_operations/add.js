const { maybeCurried } = require("../function_helpers/maybe-curried")

const add = maybeCurried((a, b) => a + b, 2)

exports.add = add