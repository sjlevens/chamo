
const memo = (fn, store = {}) => (...args) => {

  if (`${args}` in store) {
    return store[`${args}`]
  }

  store[`${args}`] = fn(...args)

  return fn(...args)

}

exports.memo = memo