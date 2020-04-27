/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { propsToStyles, cssToStyle } from './lib/helpers'
import { omitKeys } from './lib/omit-keys'
// import * as spacingStyles from './styles/spacing'
// import * as utilStyles from './styles/utils'
import { BoxProps } from './types'
import { useStyleGuideBox } from './style-guide'

export const Box = React.forwardRef<unknown, BoxProps>((props, ref) => {
  const { defaultComponent, styleGuide } = useStyleGuideBox()
  const getStyles = propsToStyles(styleGuide)
  const { Component = defaultComponent, css, styles, name } = props
  const customStyles = cssToStyle(css)
  const results = getStyles(props)
  const otherProps = omitKeys(
    props,
    'Component',
    'css',
    'styles',
    'name',
    ...results.used
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
