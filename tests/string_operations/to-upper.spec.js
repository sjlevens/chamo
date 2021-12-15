const { toUpper } = require("../../src/string_operations/to-upper");

const test = () => {
  const TEST = "abCd_@";

  let result = toUpper(TEST);

  if (result !== "ABCD_@") {
    throw new Error("toUpper fail");
  } else {
    console.log("toUpper ✅");
  }
};

exports.toUpperTest = test;
