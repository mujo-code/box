import { CSSObject } from '@emotion/core'
import React from 'react'

type FlexAlignment =
  | 'flexStart'
  | 'flexEnd'
  | 'stretch'
  | 'center'
  | 'spaceBetween'
  | 'spaceAround'
  | 'spaceEvenly'

type PixelOrPercent = number | string
type PassedComponent = React.ComponentType<any> | string

export interface BoxProps {
  Component: PassedComponent
  css: CSSObject
  // Note: This seems to be a bug, these are SerializedStyles props
  styles: string
  name: string

  // Yoga Style Props
  position: 'relative' | 'fixed'
  top: number
  left: number
  right: number
  bottom: number
  alignItems: FlexAlignment
  alignSelf: FlexAlignment
  flexDirection: 'row' | 'column' | 'rowReverse' | 'columnReverse'
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
  flex: number
  flexShrink: number
  flexBasis: number
  justifyContent: FlexAlignment
  boxSizing: 'borderBox'
  margin: PixelOrPercent
  marginTop: PixelOrPercent
  marginBottom: PixelOrPercent
  marginLeft: PixelOrPercent
  marginRight: PixelOrPercent
  padding: PixelOrPercent
  paddingTop: PixelOrPercent
  paddingBottom: PixelOrPercent
  paddingLeft: PixelOrPercent
  paddingRight: PixelOrPercent
  minWidth: PixelOrPercent
  minHeight: PixelOrPercent
  maxHeight: PixelOrPercent
  maxWidth: PixelOrPercent
  width: PixelOrPercent
  height: PixelOrPercent
  [key: string]: unknown
}

export interface StyleGuideHash {
  [key: string]: {
    [value: string]: CSSObject
  }
}

export interface StyleGuideValue {
  defaultComponent: PassedComponent
  styleGuide: StyleGuideHash[]
}
