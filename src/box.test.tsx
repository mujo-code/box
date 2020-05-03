import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { flexStyles } from './styles/flex'
import { withBox } from '.'

test('Box should render some basic styles', async (): Promise<void> => {
  const styleGuide = {
    ...flexStyles,
  }
  const Box = withBox<typeof styleGuide>({
    styleGuide,
    defaultComponent: 'div',
  })
  const wrapper = render(<Box flexDirection="row" flex={0} data-testid="foo" />)
  const el = await wrapper.findByTestId('foo')
  const styles = window.getComputedStyle(el)

  expect(styles.flex).toBe('0 0px')
  expect(styles.flexDirection).toBe('row')
})

test('Box should be able to render custom styles', async (): Promise<void> => {
  const styleGuide = {
    foo: {
      bar: { color: 'red' },
    },
  }
  const Box = withBox<typeof styleGuide>({
    styleGuide,
    defaultComponent: 'div',
  })
  const wrapper = render(<Box foo="bar" data-testid="foo" />)
  const el = await wrapper.findByTestId('foo')
  const styles = window.getComputedStyle(el)

  expect(styles.color).toBe('red')
})

test('Box should render custom components in props', async (): Promise<
  void
> => {
  const Foo = () => <span data-testid="bar"></span>
  const styleGuide = {}
  const Box = withBox<typeof styleGuide>({
    styleGuide,
    defaultComponent: 'div',
  })
  const wrapper = render(<Box Component={Foo} />)
  const el = await wrapper.findByTestId('bar')

  expect(el).toBeTruthy()
})

test('Box should be able to render css with the css prop', async (): Promise<
  void
> => {
  const styleGuide = {}
  const Box = withBox<typeof styleGuide>({
    styleGuide,
    defaultComponent: 'div',
  })
  const wrapper = render(
    <Box data-testid="foo" css={{ backgroundColor: 'red' }} />
  )
  const el = await wrapper.findByTestId('foo')
  const styles = window.getComputedStyle(el)

  expect(styles.backgroundColor).toBe('red')
})

test('Box should pass through other props', async (): Promise<void> => {
  const styleGuide = {}
  const Box = withBox<typeof styleGuide>({
    styleGuide,
    defaultComponent: 'div',
  })
  let foo = 0
  const wrapper = render(
    <Box
      data-testid="foo"
      onClick={() => {
        foo += 1
      }}
    />
  )
  const el = await wrapper.findByTestId('foo')
  fireEvent.click(el)

  expect(foo).toBe(1)
})
