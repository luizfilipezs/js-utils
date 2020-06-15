# js-utils

## What is this?

Soon, this project will be a library of utilities made in Vanilla JS.

## What you will find here

### scroll-loader

If you want to create an element that grows as you scroll the page, this utility is for you.

[Live demo](https://luizfilipezs.github.io/js-utils/scroll-loader/)

#### How to use

Create the element and import the JS file:

```html
<div class="scroll-loader"></div>
<script type="text/javascript" src="./scroll.loader.js"></script>
```

Style:

```css
.scroll-loader {
  width: 0; /* Remember that it will have no width in its initial state */
  height: 6px;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: deepskyblue;
}
```

All you have to do now is initializing `ScrollLoader`:

```js
const loader = new ScrollLoader();
```

It will search for the first element with `scroll-loader` as its class.
You can change the game rule by providing a custom element on `constructor`:

```js
const element = document.querySelector('#my-custom-element');
const loader = new ScrollLoader(element);
```
