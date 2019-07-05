import { css } from '@emotion/core'

export const cursor = {
  pointer: css({ cursor: 'pointer' }),
  default: css({ cursor: 'default' }),
}

export const textDecoration = {
  none: css({ textDecoration: 'none' }),
  underline: css({ textDecoration: 'underline' }),
}

export const textAlign = {
  center: css({ textAlign: 'center' }),
  left: css({ textAlign: 'left' }),
  right: css({ textAlign: 'right' }),
}

export const borderRadius = {
  s: css({ borderRadius: '8px' }),
  m: css({ borderRadius: '16px' }),
  l: css({ borderRadius: '24px' }),
}

export const border = {
  none: css({ border: 'none' }),
  s: css({ border: '1px solid' }),
}

export const maxWidth = { '100%': css({ maxWidth: '100%' }) }

export const whiteSpace = { nowrap: css({ whiteSpace: 'nowrap' }) }
