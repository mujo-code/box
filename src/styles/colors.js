import { generateStyle } from './helpers'

const names = {
  rumSwizzle: '#F9F8E6',
  gorse: '#FFEB3B',
  nevada: '#353D42',
  danube: '#1E5A75',
  amethyst: '#B246BA',
  lavendar: '#CC72D2',
  mischka: '#EAE2EB',
  white: '#FFFFFF',
}

const keys = Object.keys(names)

export const backgroundColor = keys.reduce(
  generateStyle('backgroundColor', names),
  {}
)

export const color = keys.reduce(generateStyle('color', names), {})
