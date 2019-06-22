# Built in styles

Box comes bundled with a few built in styles. This page will outline those styles.

## Colors

A few colors are included more to show how you can add colors to Box.

| prop            | possible values | example                           |
| --------------- | --------------- | --------------------------------- |
| backgroundColor | white, black    | `<Box backgroundColor="black" />` |
| color           | white, black    | `<Box color="white" />`           |

## Flex

Flex utilities are probably going to be the most useful box properties.

| prop           | possible values                                                                 | example                           |
| -------------- | ------------------------------------------------------------------------------- | --------------------------------- |
| display        | flex, inlineFlex                                                                | `<Box display="flex" />`          |
| direction      | row, column, reflow (row =>`column at 640 min width) |`<Box direction="row" />` |
| justifyContent | center                                                                          | `<Box justifyContent="center" />` |
| alignItems     | center                                                                          | `<Box alignItems="center" />`     |
| flex           | 0,1,2,3,4,5,6,7,8,9,10                                                          | `<Box flex="1" />`                |

## Spacing

Spacing is going to be one of the more opinionated areas in this component. The spacing grid that Box uses is a 8 pixel grid. Here are the values.

| key  | value |
| ---- | ----- |
| xxs  | 4     |
| xs   | 8     |
| s    | 16    |
| m    | 24    |
| l    | 32    |
| xl   | 40    |
| xxl  | 56    |
| none | none  |

| prop                           | possible values          | example                    |
| ------------------------------ | ------------------------ | -------------------------- |
| margin                         | xxs,xs,s,m,l,xl,xxl,none | `<Box margin="xxs" />`     |
| margin{Left,Right,Top,Bottom}  | xxs,xs,s,m,l,xl,xxl,none | `<Box marginLeft="l" />`   |
| padding                        | xxs,xs,s,m,l,xl,xxl,none | `<Box padding="xxl" />`    |
| padding{Left,Right,Top,Bottom} | xxs,xs,s,m,l,xl,xxl,none | `<Box paddingRight="s" />` |

## Utils

These are random css properties that can be reused quite a bit.

| prop           | possible values       | example                              |
| -------------- | --------------------- | ------------------------------------ |
| cursor         | pointer,default       | `<Box cursor="pointer" />`           |
| textDecoration | none,underline        | `<Box textDecoration="underline" />` |
| borderRadius   | s (8) ,m (16) ,l (24) | `<Box borderRadius="s" />`           |
| border         | none,s (1px solid)    | `<Box border="s" />`                 |
| maxWidth       | 100%                  | `<Box maxWidth="100%" />`            |
| whiteSpace     | nowrap                | `<Box whiteSpace="nowrap" />`        |
