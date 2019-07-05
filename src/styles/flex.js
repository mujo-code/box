import { css } from '@emotion/core'

export const display = {
  inlineFlex: css({ display: 'inline-flex' }),
  flex: css({ display: 'flex' }),
}

export const direction = {
  row: css({ flexDirection: 'row' }),
  column: css({ flexDirection: 'column' }),
  reflow: css({
    flexDirection: 'column',
    '@media screen and (min-width: 640px)': { flexDirection: 'row' },
  }),
}

export const justifyContent = { center: css({ justifyContent: 'center' }) }

export const alignItems = { center: css({ alignItems: 'center' }) }

export const flex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
  (accum, value) =>
    Object.assign(accum, { [`${value}`]: css({ flex: value }) }),
  {}
)
