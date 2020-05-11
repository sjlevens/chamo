const length = require("../list_helpers/length")

const maybeCurried = (fn, argumentsLength) => (...args) =>
  length(args) >= argumentsLength
    ? fn(...args)
    : maybeCurried(
        (nextArg) => fn(...args, nextArg),
        argumentsLength - length(args)
      )

exports.maybeCurried = maybeCurried
