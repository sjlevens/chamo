const compose = require("../src/composition/compose")
const filter = require("../src/list_operations/filter")
const map = require("../src/list_operations/map")

const test = () => {
  const testArrayShouldEqual = [6, 12, 18, 24, 30]

  const startArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const result = compose(
    filter((a) => a % 2 === 0),
    map((a) => a * 3),
    map((a) => a + 1)
  )(startArray)

  console.log(result === testArrayShouldEqual, startArray === startArray)
}

exports.test = test
