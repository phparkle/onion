# Onion

Toggle elements with CSS transitions and animations the easy way.

## Features

- Toggles `is-open`, `is-opening` and `is-closing` classes at the exact right times to ensure that CSS transitions and animations can be used while toggling `display: none`
- Supports custom CSS classes for easy integration with CSS animation libraries such as [animate.css](https://animate.style/)
- Handles rapid toggling properly by aborting any ongoing animations/transitions
- Has built-in timeout in case of CSS transitions/animations

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

See `example` directory for full example.

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

## API Reference

#### Show an element

```js
onion.show(el, token?);
```

#### Hide an element

```js
onion.hide(el, token?);
```

#### Toggle an element

```js
onion.toggle(el, force?, openingToken?, closingToken?);
```
