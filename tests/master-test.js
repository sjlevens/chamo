const { compose } = require("../src/composition");
const { filter } = require("../src/list_operations");
const { map } = require("../src/list_operations");
const { reduceRight } = require("../src/list_operations");
const { reduce } = require("../src/list_operations");
const { reduceRecursive } = require("../src/list_operations/reduce-recursive");
const { length } = require("../src/list_helpers");
const { memo } = require("../src/function_helpers/memo");
const { toUpperTest } = require("./string_operations/to-upper.spec");

const test = () => {
  const testArrayShouldEqual = [6, 12, 18, 24, 30];

  const startArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const result = compose(
    filter((a) => a % 2 === 0),
    map((a) => a * 3),
    map((a) => a + 1)
  )(startArray);

  const arrayTest1 = length(result) === length(testArrayShouldEqual);
  const arrayTest2 =
    reduce((a, b) => a + b, 0, result) ===
    reduceRight((a, b) => a + b, 0, testArrayShouldEqual);

  const resultObj1 = compose(
    filter((a) => a % 2 === 0),
    map((a) => a * 3),
    map((a) => a + 1)
  )({
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
  });

  const objTest1 =
    resultObj1.a === undefined &&
    resultObj1.b === 6 &&
    resultObj1.c === undefined &&
    resultObj1.d === 12 &&
    resultObj1.e === undefined &&
    resultObj1.f === 18 &&
    resultObj1.g === undefined &&
    resultObj1.h === 24 &&
    resultObj1.i === undefined &&
    resultObj1.j === 30;

  const stringResult1 = compose(
    filter((a) => a !== "a"),
    map((a) => (a === "a" ? a : "x"))
  )("sam is amazing");

  const stringTest1 = stringResult1 === "xxxxxxxxxxx";

  // Time Tests
  console.time("map");
  const a = new Array(1000);
  map((_, idx) => idx, a);
  console.timeEnd("map");

  console.time(".map");
  const a__ = new Array(1000);
  a__.map((_, idx) => idx);
  console.timeEnd(".map");

  console.time("reduceRecursive");
  const b = new Array(1000);
  reduceRecursive((acc, _, idx) => [...acc, idx], [], b);
  console.timeEnd("reduceRecursive");

  if (arrayTest1 && arrayTest2 && objTest1 && stringTest1) {
    console.log("OK");
  } else {
    console.log("ERROR", arrayTest1, arrayTest2, objTest1, stringTest1);
  }
};
test();
toUpperTest();
