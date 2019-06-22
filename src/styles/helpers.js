import { css } from 'glamor'

export const generateStyle = (property, dict) => (accum, key) =>
  Object.assign(accum, { [key]: css({ [property]: dict[key] }) })

export const cssToStyle = cssProp => {
  const cssArgs = Array.isArray(cssProp) ? cssProp : [cssProp]
  return cssProp ? css(...cssArgs) : {}
}
