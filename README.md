# Box

This is a common component in React style guides like [gestalt](https://pinterest.github.io/gestalt/#/Box). It gives a general primitive component that you can pass a bunch of css props to it. What makes this version of box different then other implementations is the ability to extend the box without modifying the core code. See [extend](#extend)

Box is a [single element component](https://www.freecodecamp.org/news/introducing-the-single-element-pattern-dfbd2c295c5d/).

## Technology

You will need to install these packages since they are peerDependencies.

- [emotion](https://emotion.sh/)
- [react](https://reactjs.org/)

## Install

```shell
npm install @jcblw/box --save
```

and if you do not have react or emotion.

```shell
npm install react emotion --save
```

# Usage

```js
import { Box } from '@jcblw/box'

export const MyComponent = () => <Box padding="s">A box with padding</Box>
```

Box has a ton of built in styles and some separate [documentation](./src/styles/)

### Changing the underlaying component.

By passing a `Component` prop to Box you are able to change the underlaying component

```js
<Box Component="div" /> // <div />: default
<Box Component="a" /> // <a />
<Box Component={MyCustomComponent} /> // <MyCustomComponent />
```

### Some quick styles

No property setup for a style and its only going to be used one place? There is a new css prop that can handle that.

```jsx
<Box css={{ width: '300px' }} />
  <Box css={[{border: '1px solid red'}, {top: 0}]}
</Box>
```

# Extend

## Adding to existing styles

There is a couple of ways to extend Box, I think the api will eventually change to something probably more clever.

```js
// Somewhere that is loaded early in your application.
import { styleGuide } from '@jcblw/box'

styleGuide.push(cssChunk)
```

This modifies the existing style guide for box.

```js
// interface cssChunk {
//   [cssProperty: String]: {
//     [cssValue: String]: EmotionCSSObject
//   }
// }
// example
const colors = { color: { myColor: css({ color: 'tomato' }) } }
styleGuide.push(colors)
// <Box color="myColor" /> // my text is tomato
```

see [more examples](./src/styles/utils.js)

### Changing all styles

Right now there is not a way to do this without setting up a proxy component.

```js
import { propsToStyles } from '@jcblw/box/dist/lib/helpers'

const myGetStyles = propsToStyles(customStyleGuide) // load your custom styles here

export const MyBox = props => <Box getStyles={myGetStyles} {...props} />
```
