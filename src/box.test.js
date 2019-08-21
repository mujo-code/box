import React from 'react'
import Renderer from 'react-test-renderer'
import { Box } from './box'

test('Box should be present', () => {
  expect(Box).toBeTruthy()
})

test('Box should render properly', () => {
  const json = Renderer.create(<Box padding="m" />).toJSON()
  expect(json).toMatchSnapshot()
})
