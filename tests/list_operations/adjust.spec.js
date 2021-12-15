const { adjust } = require("../../src/list_operations");
const { toUpper } = require("../../src/string_operations/to-upper");

const test = () => {
  const TEST = ["a", "b", "c"];
  const result = adjust(1, toUpper)(TEST);

  if (result !== ["a", "B", "c"]) {
    throw new Error("adjust failed");
  }
};
