import { generateStyle } from './helpers'

const names = {
  white: '#FFFFFF',
  black: '#000000',
}

const keys = Object.keys(names)

export const backgroundColor = keys.reduce(
  generateStyle('backgroundColor', names),
  {}
)

export const color = keys.reduce(generateStyle('color', names), {})
