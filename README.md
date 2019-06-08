# Box

This is a common component in React style guides like [gestalt](https://pinterest.github.io/gestalt/#/Box). It gives a general primitive component that you can pass a bunch of css props to it. What makes this version of box different then other implementations is the ability to extend the box without modifying the core code. See [extend](#extend)

## Technology

You will need to install these packages since they are peerDependencies.

- [glamor](https://github.com/threepointone/glamor)
- [react](https://reactjs.org/)

## Install

```shell
npm install @jcblw/box --save
```

and if you do not have react or glamor.

```shell
npm install react glamor --save
```

# Extend

There is a couple of ways to extend Box, I think the api will eventually change to something probably more clever.

```typescript
// Somewhere that is loaded early in your application.
import { styleGuide } from '@jcblw/box'

styleGuide.push(cssChunk)
```

This modifies the existing style guide for box.

```javascript
// interface cssChunk {
//   [cssProperty: String]: {
//     [cssValue: String]: GamorCSSObject
//   }
// }
// example
const colors = { color: { white: css({ color: 'white' }) } }
styleGuide.push(colors)
```

see [more examples](./src/styles/utils.js)

### TODO

Add some documentation around [built in styles](./src/styles)
