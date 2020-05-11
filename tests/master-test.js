const { compose } = require("../src/composition")
const { filter } = require("../src/list_operations")
const { map } = require("../src/list_operations")
const { reduceRight } = require("../src/list_operations")
const { reduce } = require("../src/list_operations")
const { length } = require("../src/list_helpers")

const test = () => {
  const testArrayShouldEqual = [6, 12, 18, 24, 30]

  const startArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const result = compose(
    filter((a) => a % 2 === 0),
    map((a) => a * 3),
    map((a) => a + 1)
  )(startArray)

  const test1 = length(result) === length(testArrayShouldEqual)
  const test2 =
    reduce((a, b) => a + b, 0, result) ===
    reduceRight((a, b) => a + b, 0, testArrayShouldEqual)

  if (test1 && test2) {
    console.log("OK")
  } else {
    console.log("ERROR")
  }
}
test()
