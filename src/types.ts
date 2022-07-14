import { CSSObject } from '@emotion/react'
import React from 'react'

type FlexAlignment =
  | 'flexStart'
  | 'flexEnd'
  | 'stretch'
  | 'center'
  | 'spaceBetween'
  | 'spaceAround'
  | 'spaceEvenly'

export interface BoxStyleProps {
  alignItems: FlexAlignment
  alignSelf: FlexAlignment
  flexDirection: 'row' | 'column' | 'rowReverse' | 'columnReverse'
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
  flex: number
  flexShrink: number
  flexBasis: number
  justifyContent: FlexAlignment
}

type PassedComponent = React.ElementType
type ElementProps<T, K> = Exclude<K, keyof T>

export type BoxProps<
  T,
  K = React.BaseHTMLAttributes<HTMLDivElement>
> = ElementProps<T, K> & {
  Component: PassedComponent
  css: CSSObject
}

export type MakeBoxProps<
  T,
  K = React.BaseHTMLAttributes<HTMLDivElement>
> = Partial<BoxProps<T, K> & SubObjectKeys<T>>

export type SubObjectKeys<T> = {
  [K in keyof T]: T[K] extends object ? keyof T[K] : never
}

export interface StyleGuideHash {
  [key: string]: {
    [value: string]: {
      [property: string]: unknown
    }
  }
}

export interface StyleGuideValue {
  defaultComponent: PassedComponent
  styleGuide: StyleGuideHash
}
