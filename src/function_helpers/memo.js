
const memo = (fn, store = {}) => (...args) => {

  if (`${args}` in store) {
    return store[`${args}`]
  }

  store[`${args}`] = fn(...args)

  return store[`${args}`]

}

exports.memo = memo