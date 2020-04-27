import React, { useContext } from 'react'
import { StyleGuideValue, StyleGuideHash } from './types'
import { flexStyles } from './styles/flex'

export const context = React.createContext<StyleGuideValue>({
  defaultComponent: 'div',
  styleGuide: [flexStyles],
})
const { Provider } = context

export const useStyleGuideBox = () => useContext(context)

interface StyleGuideProps extends Partial<StyleGuideValue> {
  override?: boolean
}

export const StyleGuide: React.FC<StyleGuideProps> = ({
  children,
  defaultComponent,
  styleGuide,
  override,
}) => {
  const {
    defaultComponent: existingDefaultComponent,
    styleGuide: existingStyleGuide,
  } = useStyleGuideBox()

  let resolvedStyleGuide: StyleGuideHash[] = [
    ...existingStyleGuide,
    ...styleGuide,
  ]
  if (override && styleGuide) {
    resolvedStyleGuide = styleGuide
  }
  return (
    <Provider
      value={{
        defaultComponent: defaultComponent || existingDefaultComponent,
        styleGuide: resolvedStyleGuide,
      }}
    >
      {children}
    </Provider>
  )
}
