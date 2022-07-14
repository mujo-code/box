import { css, SerializedStyles, CSSObject } from '@emotion/react'
import keys from 'object-keys'
import { StyleGuideHash, BoxProps } from '../types'

type CSSToStyle = (cssProp: CSSObject) => SerializedStyles

export const cssToStyle: CSSToStyle = cssProp =>
  cssProp ? css(cssProp) : css({})

export function mapToPair<T>(props: Partial<BoxProps<T>>) {
  return (key: string): [string, string | number | unknown] => [key, props[key]]
}

interface MappingAccum {
  used: string[]
  key: string
  value: string | number | unknown
}

type MapToStyleGuideValue = (
  accum: MappingAccum
) => (
  val: SerializedStyles | null,
  curr: StyleGuideHash
) => SerializedStyles | null

export const mapToStyleGuideValue: MapToStyleGuideValue = ({
  used = [],
  key,
  value,
}) => (val, curr) => {
  if (val) return val
  if (curr[key]) {
    used.push(key)
    if (
      (typeof value === 'string' || typeof value === 'number') &&
      curr[key][value]
    ) {
      return cssToStyle(curr[key][value] as CSSObject)
    }
  }
  return val
}

const cssDataPattern: RegExp = /^data-css/

interface PropsToStylesRet {
  used: string[]
  styles: SerializedStyles[]
}

export function propsToStyles<T>(stylesObjs: StyleGuideHash) {
  return (props: Partial<BoxProps<T>>): PropsToStylesRet => {
    const used: string[] = []
    const styles = keys(props)
      .map(mapToPair(props))
      .map(pair => {
        if (cssDataPattern.test(pair[0])) {
          used.push(pair[0])
          return pair[0].replace(cssDataPattern, 'css')
        }
        return [stylesObjs].reduce(
          mapToStyleGuideValue({ used, key: pair[0], value: pair[1] }),
          null
        )
      })
      .filter(x => x) as SerializedStyles[]
    return { used, styles }
  }
}

interface MakeStyles {
  <K extends string, T extends {}>(property: K, obj: T): {
    [K2 in keyof typeof obj]: { [key: string]: T[K2] }
  }
}

export const makeStyles: MakeStyles = (property: string, props) => {
  const ret = {} as {
    [K in keyof typeof props]: { [key: string]: typeof props[K] }
  }
  let key: keyof typeof props
  for (key in props) {
    const cssObject = {}
    cssObject[property] = props[key]
    ret[key] = cssObject
  }
  return ret
}
