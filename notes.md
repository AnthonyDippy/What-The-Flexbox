# flexbox-crash-course

CSS Flexible Box Layout Notes

- [flexbox-crash-course](#flexbox-crash-course)
  - [Guides](#guides)
  - [Flexbox](#flexbox)
  - [Basics & Terminology](#basics--terminology)
  - [Properties (flex container)](#properties-flex-container)
    - [Alignment](#alignment)
  - [Properties (flex items)](#properties-flex-items)
  - [My Notes](#my-notes)
    - [Basics](#basics)
    - [Direction & Wrap & Order](#direction--wrap--order)
    - [Justify & Align](#justify--align)
    - [Flex](#flex)
    - [Other](#other)

***

## Guides

[flexbox.io](https://flexbox.io/) - Wes Bos

[What-The-Flexbox Youtube](https://www.youtube.com/playlist?list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid) - Wes Bos

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - CSS Tricks

[CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) - MDN

## Flexbox

CSS Flexible Box Layout (Flexbox)

- Lay out, align, and distrubte space among items in a container
- Sizes of items can be unknown and/or dynamic
- Container alters its items' width/height to best fill available **free space**
- Accommodate to all kinds of display devices and screen sizes
- Grows items to fill available space or shrinks them to prevent overflow
- Direction-agnostic as opposed to regular layouts
  - block - vertically-based
  - inline - horizontally-based
- Most appropriate to the components of an applications and small-scale layouts (Grid layout intended for larger scale layouts)

## Basics & Terminology

container - parent element containing direct children called flex items

item - direct children of the flex container

main-axis - primary axis along which flex items are laid out

cross-axis - axis perpendicular to the main-axis

## Properties (flex container)

`display: flex | inline-flex`

establishes flex container (and enables flex context for all direct children)

`flex-direction: row (default, left-to-right) | row-reverse | column (top-to-bottom) | column-reverse`

establishes the main-axis (and cross-axis implicitly)

`flex-wrap: nowrap (default) | wrap | wrap-reverse`

determines whether the flex items will wrap onto multiple rows/columns

`flex-flow: <‘flex-direction’> || <‘flex-wrap’>`

shorthand property (default: row nowrap)

### Alignment

`justify-content: flex-start (default) | flex-end | center | space-between | space-around | space-evenly`

defines alignment along the main-axis (helps distribute free space when either all flex items on a line are inflexible, or are flexible but have reached their max size)

`align-items: stretch (default) | flex-start | flex-end | center | baseline`

defines default behavior for how flex items are laid out along the cross-axis on the current line (justify-content version for the cross-axis)

`align-content: flex-start | flex-end | center | space-between | space-around | stretch (default)`

aligns a flex container's lines within when there is extra space in the cross-axis (similar to how justify-content aligns individual items within the main-axis) (no effect when only one line of flex items)

## Properties (flex items)

`order: <integer> /* default is 0 */`

by default flex items are laid out in source order, but this property will override source order for a specific item (higher order means later placement) (pos or neg values)

`flex-grow: <number> /* default 0 */`

unitless value that serves as a proportion which dictates what amount of the available space inside the flex container the item should take up (0 means inflexible)

`flex-shrink: <number> /* default 1 */`

unitless value that serves as a proportion which dictates what amount of space should the flex item give up when there is a lack of space in the flex container (0 means inflexible)

`flex-basis: <length> | auto /* default auto */`

defines the default size of an element before remaining space is distributed (20%, 5rem, keywords, etc.)

auto - "look at my width or height property (or content if not set)" (previously main-size)

content - "size it based on the item's content" (kinda supported)

[absolute sizing vs relative sizing](https://stackoverflow.com/questions/43520932/make-flex-grow-expand-items-based-on-their-original-size)

- This is absolute sizing. All space on the line is distributed.
  - When flex-basis is 0, flex-grow ignores the size of the content in flex items and treats all space on the line as free space.
- This is relative sizing. Only extra space on the line is distributed.
  - When flex-basis is auto, the size of the content in flex items is first deducted to determine the free space in each item. flex-grow then distributes the free space among items (based on each item's flex-grow value).

`flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

shorthand for flex-grow, flex-shrink, and flex-basis (flex-shrink and flex-basis are optional) (default is 0 1 auto) **(shorthand recommended)**

other keywords: 

- initial (default)
  - 0 1 auto
- auto
  - 1 1 auto
- none
  - 0 0 auto
- pos-number
  - pos-number 1 0

`align-self: auto | flex-start | flex-end | center | baseline | stretch`

allows default alignment (from align-items) to be overridden for individual flex items

## My Notes

### Basics

container - contains direct children called flex items

items - direct children of flex container

display: flex - container spans all the way across the page, similar to block-level elements

display: inline-flex - container wraps around the content, similar to an inline element

vh - viewport height, responsive to window resizing 

### Direction & Wrap & Order

flex-direction: row - default, items stack beside each other and span vertically to reach the height of the container

flex-direction: column - items stack on top of each other and span horizontally to reach the width of the container

main axis - defined by flex-direction, defines which way the items stack beside each other

- ex: row - arrow from left to right
- ex: column - arrow from top to bottom

cross axis - opposite axis to main, defines which way the flex items span

flex-direction: row-reverse - redefines main-axis direction

- ex: row - right to left
- ex: column - bottom to top

flex-wrap: nowrap - default

flex-wrap: wrap - items wrap to new rows/columns inside of the container

by default, items stretch completely across their containers

flex-wrap: wrap-reverse - cross axis changes direction, main axis stays the same

margin interferes with the % units => must account for margin: calc(33.33% - 20px);

padding and border do not disrupt the % units

order - default is 0

- higher value order is displayed later
- negative order values allowed
- works similar to z-index
- does not work with copying text (click and drag highlighting)

### Justify & Align

justify-content  
how are items aligned on the main axis? (typically left to right)
flex-start (default), flex-end, center,
space-between, space-around

change to column, nothing works ...???
container needs a height

align-items

more concerned about the cross-axis, needs a height to work (flex-direction: row)

stretch (default), flex-start, flex-end, center, baseline - line for different size text/things

align-content- cross axis, needs some sort of wrap

stretch (default), flex-start, flex-end, center, space-between, space-around

align-self - cross axis

exactly like align-items except: applied to single item on a case by case basis

### Flex

flex: width default is auto (width of content inside), at what proportion should items scale up or down depending on excess/lack of space

flex - shorthand property for flex-grow, flex-shrink, flex-basis

flex: pos_number means ...

flex-grow: pos_number
flex-shrink: 1
flex-basis: 0px

flex-grow - when there is extra space, how much should it use
default is 0

flex-shrink - when there is less space, how much should it use
default is 1

flex-basis - before growing/shrinking, how high/wide should it be?
default is auto

```css
.box1 {
  flex-basis: 400px;
  flex-grow: 10;
  flex-shrink: 5;
  /* means */
  flex: 10 5 400px;
}
```

flex-grow, flex-shrink, flex-basis: with wrap on, all work only on the row/column that they are on
and don't have any affect on the item before or after

### Other

autoprefixer, gulp , and node.js

setting flex, overwriting flex with media queries

setting flex/order, overwriting flex/order with media queries

nesting flexbox

nesting flexbox again

centering input/nav bar on page

```css
.cover {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

flex app layout