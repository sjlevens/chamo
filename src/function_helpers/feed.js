const { maybeCurried } = require("./maybe-curried");

const feed = maybeCurried((prop, fn) => fn(prop), 2);

exports.feed = feed;
