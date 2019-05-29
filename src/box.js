import React from 'react'
import { removeKeys } from './lib/remove-keys'
import * as colorStyles from './styles/colors'
import * as flexStyles from './styles/flex'
import * as spacingStyles from './styles/spacing'
import * as utilStyles from './styles/utils'

const styleGuide = [
  flexStyles,
  {
    color,
    backgroundColor,
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
  },
  utilStyles,
]
const mapToPair = props => key => [key, props[key]]
const noPairFoundError = (key, value) =>
  `Prop ${key}="${value}" found in style guide`
const mapToStyleGuildValue = ({ used = [], key, value }) => (val, curr) => {
  if (val) return val
  if (curr[key]) {
    used.push(key)
    if (!curr[key][value]) {
      console.error(noPairFoundError(key, value))
    } else {
      return curr[key][value]
    }
  }
  return val
}
const cssDataPattern = /^data-css/
export const propsToStyles = styles => props => {
  const used = []
  const styles = Object.keys(props)
    .map(mapToPair(props))
    .map(pair => {
      const [key, value] = pair
      if (cssDataPattern.test(key)) {
        used.push(key)
        return key.replace(cssDataPattern, 'css')
      }
      return styleGuide.reduce(mapToStyleGuildValue({ used, key, value }), null)
    })
    .filter(x => x)
  return { used, styles }
}

export const Box = props => {
  const { Component, getStyles } = props
  const results = getStyles(props)
  const otherProps = removeKeys(props, ...results.used, 'Component')
  return <Component className={`${results.styles.join(' ')}`} {...otherProps} />
}

Box.defaultProps = { Component: 'div', getStyles: propsToStyles(styleGuide) }
