const reduceRecursive = (reducer, initialVal, iterable) => {
  const recurse = (index, acc) =>
    index + 1 === iterable.length
      ? acc
      : recurse(index + 1, reducer(acc, iterable[index], index));

  return recurse(0, initialVal);
};

exports.reduceRecursive = reduceRecursive;
