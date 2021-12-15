const { map } = require("../list_operations");

const toUpper = map((a) => String.fromCharCode(`${a}`.charCodeAt(0) & 223));

exports.toUpper = toUpper;
