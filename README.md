# Onion🧅

![npm bundle size](https://img.shields.io/bundlephobia/min/onion?style=flat-square)

> Toggle elements with CSS transitions and animations the easy way.

This library addresses the issue of not being able to transition/animate an element while toggling the display property at the same time. See here for a full explanation: https://www.impressivewebs.com/animate-display-block-none/

## Features

- Toggles `is-open`, `is-opening` and `is-closing` classes at the exact right times to ensure that CSS transitions and animations can be used while toggling `display: none;`
- Supports custom CSS classes for easy integration with CSS animation libraries such as [animate.css](https://animate.style/)
- Handles rapid toggling properly by aborting any ongoing animations/transitions
- Has built-in 2 second timeout in case of missing CSS transition/animation
- Ignores bubbled transition/animation events
- Written in TypeScript

## Installation

Onion can be bundled with your project or added directly to the browser.

#### Bundle install

Add onion to your project

```bash
# NPM
npm install onion

# yarn
yarn add onion

# pnpm
pnpm add onion
```

Import the package to your script

```js
// ESM
import onion from "onion";

// CommonJS
const onion = require("onion");
```

#### Browser install

From unpkg CDN

```html
<script src="https://unpkg.com/onion@latest/dist/onion.umd.js"></script>
```

Self-hosted

```html
<script src="/path/to/onion.umd.js"></script>
```

## Usage

See `/example` for a more detailed example.

#### HTML

```html
<button class="toggle">Toggle</div>

<div class="box">Example</div>
```

#### CSS

```css
.box {
  display: none;
  opacity: 0;
  transition: opacity 0.4s ease-out;
}

.box.is-open {
  display: block;
}

.box.is-opening {
  opacity: 1;
}
```

#### JS

```js
const toggle = document.querySelector(".toggle");
const box = document.querySelector(".box");

toggle.addEventListener("click", function() {
  onion.toggle(box);
});
```

## How it works

Onion does not ship with any CSS styles. You should add your own stylesheet to make it work.

#### 1. Default styles

You should add `display: none;` to the element by default.

#### 2. is-open

The `is-open` class is added when the element is shown. You should override the default `display: none;` with `display: block;`, for example.

#### 3. is-opening

The `is-opening` class is added on the next event cycle after `is-open` is added. A CSS transition or animation should be added to this class. The 1-cycle delay ensures that the transition/animation can be played immediately after `display: none;` is removed.

Note: `is-opening` is kept on the element until it is closing.

#### 4. is-closing

The `is-closing` class is added when the element is hiding. A CSS transition or animation should be added to this class. The `is-open` class will not be removed until the transition or animation ends.


## API Reference

#### Show an element

```js
onion.show(el, token?);
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `el` | `HTMLElement` | The element to be shown |
| `token` | `string` | Optional. A custom class to be added while opening |

#### Hide an element

```js
onion.hide(el, token?);
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `el` | `HTMLElement` | The element to be hidden |
| `token` | `string` | Optional. A custom class to be added while closing |

#### Toggle an element

```js
onion.toggle(el, force?, openingToken?, closingToken?);
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `el` | `HTMLElement` | The element to be toggled |
| `force` | `boolean` | Optional. If true, the element will be shown. Otherwise, it will be hidden. |
| `openingToken` | `string` | Optional. A custom class to be added while opening |
| `closingToken` | `string` | Optional. A custom class to be added while closing |

Note: you can pass `undefined` to skip an optional argument.
