import React from 'react'
import { removeKeys } from './lib/remove-keys'
import { propsToStyles } from './libs/helpers'
import * as colorStyles from './styles/colors'
import * as flexStyles from './styles/flex'
import * as spacingStyles from './styles/spacing'
import * as utilStyles from './styles/utils'

export const styleGuide = [
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

export const Box = props => {
  const { Component, getStyles } = props
  const results = getStyles(props)
  const otherProps = removeKeys(props, ...results.used, 'Component')
  return <Component className={`${results.styles.join(' ')}`} {...otherProps} />
}

Box.defaultProps = { Component: 'div', getStyles: propsToStyles(styleGuide) }
