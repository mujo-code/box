# Box

This is a common component in React style guides like [gestalt](https://pinterest.github.io/gestalt/#/Box). It gives a general primitive component that you can pass a bunch of css props to it. What makes this version of box different then other implementations is the ability to extend the box without modifying the core code. Box is a [single element component](https://www.freecodecamp.org/news/introducing-the-single-element-pattern-dfbd2c295c5d/) meaning that the box component is very flexible with its implementation.

## Technology

You will need to install these packages since they are peerDependencies.

- [emotion](https://emotion.sh/)
- [react](https://reactjs.org/)

## Install

```shell
npm install @mujo/box --save
```

and if you do not have React or emotion.

```shell
npm install react emotion --save
```

# Usage

### Using the exported Box

The out of the box Box component, is very limited. It currently only supports a handful of flex properties. The expectation you will want to extend Box right away.

```typescript
import { Box } from '@mujo/box'

export const MyComponent = () => (
  <Box display="flex" flex={0} flexWrap="nowrap">
    A Box with some flex
  </Box>
)
```

### Boxes built in props

Box has only a few props that the internal component cares about: Component, and css.
These two props allow you to "on the fly" change out styles, and functionality of the component.

```typescript
<Box Component="a" href="/foo" css={{ textDecoration: 'underline' }}>
  Go to foo
</Box>
```

`Component` can take a string for built in components in `react-dom` or custom components. This functionality allows for things like usage of `Box` with `react-native` (see more in extending the box).

`css` is a css object that contains any css properties that you would like to apply to component.

### Extending the Box

Box is implemented in a way to be able to easily make variants of Box using the `withBox` higher order component. You can pass in a style guide into the `withBox` function, and also a default component. This allows the Box component to be transformed into a primitive component that exposes props of your style guide.

```typescript
import { withBox } from '@mujo/box'

const Box = withBox({
  styleGuide: {
    foo: {
      bar: { color: 'red' },
      baz: { color: 'blue' },
    },
  },
  defaultComponent: 'span',
})

export const MyComponent = () => (
  <>
    <Box foo="bar">Some red text</Box>
    <Box foo="baz">Some blue text</Box>
  </>
)
```

#### Typescript support

Box is also written in Typescript so we are able to add those props in a ways that makes it pretty easy to see the type hinting for each prop.

```typescript
const styleGuide = {
  foo: {
    bar: { color: 'red' },
    baz: { color: 'blue' },
  },
}
const Box = withBox<typeof styleGuide>({
  styleGuide,
  defaultComponent: 'div',
})
```

In this example here would be what the props of the component looks like.

```typescript
interface BoxProps extends ExistingProps {
  foo: 'bar' | 'baz'
}
// ExistingProps are HTMLElement props, Component prop, and css prop.
```

#### Extending for React Native

Box supports react native but only if you extend it to pass in react native primitives.

```typescript
import { View } from 'react-native'

const Box = withBox({
  styleGuide: {
    foo: {
      bar: { color: 'red' },
      baz: { color: 'blue' },
    },
  },
  defaultComponent: View,
})
```

### Building a style guide

A style guide should be rigid enough to support a teams need for consistency and also flexible enough that designs do not want to exit the system. For this reason the boxes style guide implementation is just `JSON` with some CSS properties.

```typescript
interface StyleGuide {
  [propName: string]: {
    [propValue: string]: CSSObject
  }
}
```

> Note: please do not type your style guide or it will break inference.

#### Colors example

Your team has a couple colors you want to use. Box can make it easy for the team to apply those colors to a component.

```typescript
const styleGuide = {
  color: {
    red: { color: '#ED6173' },
    blue: { color: '#6761ED' },
  },
  backgroundColor: {
    red: { backgroundColor: '#ED6173' },
    blue: { backgroundColor: '#6761ED' },
  },
}

const Box = withBox({
  styleGuide,
  defaultComponent: 'div',
})

<Box color="red" backgroundColor="blue">My text is #ED6173</Box>
```

##### Using makeStyles

We also expose a utility called `makeStyles` to stream line this.

```typescript
import { makeStyles } from '@mujo/box'

const colors = {
  red: '#ED6173',
  blue: '#6761ED',
}
const styleGuide = {
  color: makeStyles('color', colors),
  backgroundColor: makeStyles('backgroundColor', colors),
}
// its still type safe!
```

##### Extending existing flex styles

We will be supporting more styles in the future, and potentially even some themes. To be able to reuse some of the current built in styles you can just spread them into your custom styles.

```typescript
import { flexStyles } from '@mujo/box'

const styleGuide = {
  ...myCustomStyles,
  ...flexStyles,
}
```
