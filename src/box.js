/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { propsToStyles } from './lib/helpers'
import { removeKeys } from './lib/remove-keys'
import * as flexStyles from './styles/flex'
import { cssToStyle } from './styles/helpers'
import * as spacingStyles from './styles/spacing'
import * as utilStyles from './styles/utils'

export const styleGuide = [flexStyles, spacingStyles, utilStyles]

export const Box = React.forwardRef((props, ref) => {
  const { Component, getStyles, css, styles, name } = props
  const customStyles = cssToStyle(css)
  const results = getStyles({ ...props })
  const otherProps = removeKeys(
    props,
    ...results.used,
    'Component',
    'getStyles',
    'css',
    'styles',
    'name'
  )
  if (name && styles) {
    results.styles.push({ styles, name })
  }
  if (customStyles) {
    results.styles.push(customStyles)
  }
  return <Component ref={ref} css={results.styles} {...otherProps} />
})

Box.displayName = 'Box'

Box.defaultProps = { Component: 'div', getStyles: propsToStyles(styleGuide) }
