const maybeCurried =
  (fn, argLength) =>
  (...args) =>
    args.length >= argLength
      ? fn(...args)
      : maybeCurried((wait) => fn(...args, wait), argLength - args.length);

exports.maybeCurried = maybeCurried;
