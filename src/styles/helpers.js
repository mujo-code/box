import { css } from 'glamor'

export const generateStyle = (property, dict) => (accum, key) =>
  Object.assign(accum, { [key]: css({ [property]: dict[key] }) })
