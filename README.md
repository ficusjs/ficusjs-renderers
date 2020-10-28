# FicusJS renderers

Minified ES module renderers for [FicusJS](https://docs.ficusjs.org).

This package provides a tested set of renderers as ES modules to make working with them much easier.

## Summary

A `renderer` function must be provided when creating a new [FicusJS](https://docs.ficusjs.org) component.
This allows any renderer to be plugged into a component.

The following renderers have been tested with [FicusJS](https://docs.ficusjs.org) and are available as minified bundles in this package to make working with them much easier.

- [lit-html](https://www.npmjs.com/package/lit-html)
- [uhtml](https://www.npmjs.com/package/uhtml)
- [htm and Preact](https://www.npmjs.com/package/htm)
- `document.createElement`

## `lit-html`

The `lit-html` renderer is available in this package.

```js
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers/dist/lit-html.js'
```

## `uhtml`

The `uhtml` renderer is available in this package.

```js
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers/dist/uhtml.js'
```

## `htm` with `preact`

The `htm` with `preact` renderer is available in this package.

```js
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers/dist/htm.js'
```

## `document.createElement`

The simple `document.createElement` renderer is available in this package.

```js
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers/dist/create-element.js'
```
