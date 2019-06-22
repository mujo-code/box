import React from 'react'
import { propsToStyles } from './lib/helpers'
import { removeKeys } from './lib/remove-keys'
import * as flexStyles from './styles/flex'
import { cssToStyle } from './styles/helpers'
import * as spacingStyles from './styles/spacing'
import * as utilStyles from './styles/utils'

export const styleGuide = [flexStyles, spacingStyles, utilStyles]

export const Box = React.forwardRef((props, ref) => {
  const { Component, getStyles, css } = props
  const results = getStyles(Object.assign({}, props, cssToStyle(css)))
  const otherProps = removeKeys(
    props,
    ...results.used,
    'Component',
    'getStyles',
    'css'
  )
  return (
    <Component
      ref={ref}
      className={`${results.styles.join(' ')}`}
      {...otherProps}
    />
  )
})

Box.displayName = 'Box'

Box.defaultProps = { Component: 'div', getStyles: propsToStyles(styleGuide) }
