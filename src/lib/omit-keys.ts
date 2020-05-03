interface OmitKeys {
  <T extends {}, K extends [...(keyof T)[]]>(obj: T, ...keys: K): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2]
  }
}

export const omitKeys: OmitKeys = (props, ...keys) => {
  const ret = {} as {
    [K in keyof typeof props]: typeof props[K]
  }
  let key: keyof typeof props
  for (key in props) {
    if (keys.indexOf(key) === -1) {
      ret[key] = props[key]
    }
  }
  return ret
}
