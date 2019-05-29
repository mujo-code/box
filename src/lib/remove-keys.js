export const removeKeys = (props, ...filterKeys) =>
  Object.keys(props)
    .filter(key => filterKeys.indexOf(key) === -1)
    .reduce((accum, key) => {
      Object.assign(accum, { [key]: props[key] })
      return accum
    }, {})
