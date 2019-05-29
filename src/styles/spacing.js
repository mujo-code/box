import { css } from 'glamor'

import { generateStyle } from './helpers'

const values = {
  xxs: 4,
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 56,
  none: 'none',
}

const keys = Object.keys(values)
export const padding = keys.reduce(generateStyle('padding', values), {})
export const paddingTop = keys.reduce(generateStyle('paddingTop', values), {})
export const paddingBottom = keys.reduce(
  generateStyle('paddingBottom', values),
  {}
)
export const paddingLeft = keys.reduce(generateStyle('paddingLeft', values), {})
export const paddingRight = keys.reduce(
  generateStyle('paddingRight', values),
  {}
)

export const margin = keys.reduce(generateStyle('margin', values), {})
export const marginTop = keys.reduce(generateStyle('marginTop', values), {})
export const marginLeft = keys.reduce(generateStyle('marginLeft', values), {})
export const marginRight = keys.reduce(generateStyle('marginRight', values), {})
export const marginBottom = keys.reduce(
  generateStyle('marginBottom', values),
  {}
)
