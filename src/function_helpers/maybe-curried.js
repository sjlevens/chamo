const { length } = require("../list_helpers/length")

const maybeCurried = (fn, argLength) => (...args) =>
  length(args) >= argLength
    ? fn(...args)
    : maybeCurried((wait) => fn(...args, wait), argLength - length(args))

exports.maybeCurried = maybeCurried
