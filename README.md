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

The [lit-html](https://www.npmjs.com/package/lit-html) renderer is available in this package.

```js
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## `uhtml`

The [uhtml](https://www.npmjs.com/package/uhtml) renderer is available in this package.

```js
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/uhtml.js'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## `htm` and `Preact`

The [htm and Preact](https://www.npmjs.com/package/htm) renderer is available in this package.

```js
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/htm.js'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## `document.createElement`

The simple `document.createElement` renderer is available in this package.
In your component, return a template literal string containing HTML.

```js
import { renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/create-element.js'

createComponent('test-comp', {
  renderer,
  render () {
    return `
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```
