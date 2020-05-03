/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { propsToStyles, cssToStyle } from './lib/helpers'
import { omitKeys } from './lib/omit-keys'
import { StyleGuideValue, MakeBoxProps } from './types'
import { flexStyles } from './styles/flex'

export function withBox<T, K = React.BaseHTMLAttributes<HTMLDivElement>>(
  options: StyleGuideValue
) {
  type Props = MakeBoxProps<T, K>
  const Box = React.forwardRef<unknown, Props>((props, ref) => {
    const getStyles = propsToStyles(options.styleGuide)
    const { css, Component } = props
    const customStyles = cssToStyle(css)
    const results = getStyles(props)
    const keysUsed = results.used
    const otherProps = omitKeys(
      props,
      'Component',
      'css',
      // @ts-ignore
      ...keysUsed
    )
    if (customStyles) {
      results.styles.push(customStyles)
    }
    const BoxComponent = Component || options.defaultComponent
    return <BoxComponent ref={ref} css={results.styles} {...otherProps} />
  })
  Box.displayName = 'Box'
  return Box
}

export const Box = withBox({ defaultComponent: 'div', styleGuide: flexStyles })
