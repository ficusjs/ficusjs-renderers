# FicusJS renderers

Minified ES module renderers for [FicusJS](https://docs.ficusjs.org).

This package provides a tested set of renderers as ES modules to make working with them much easier.

## Summary

A `renderer` function must be provided when creating a new [FicusJS](https://docs.ficusjs.org) component.
This allows any renderer to be plugged into a component.

The following renderers have been tested with [FicusJS](https://docs.ficusjs.org) and are available as minified bundles in this package to make working with them much easier.

- [uhtml](https://www.npmjs.com/package/uhtml) (default)
- [lit-html](https://www.npmjs.com/package/lit-html)
- [htm](https://www.npmjs.com/package/htm)
- [htm](https://www.npmjs.com/package/htm) with [Preact](https://www.npmjs.com/package/preact)
- `document.createElement`

## `uhtml`

The [uhtml](https://www.npmjs.com/package/uhtml) renderer is available in this package and is the default renderer.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/uhtml'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## `lit-html`

The [lit-html](https://www.npmjs.com/package/lit-html) renderer is available in this package.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## `htm`

The [htm](https://www.npmjs.com/package/htm) renderer is a JSX-like renderer available in this package.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/htm'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## `htm` with `Preact`

The [htm](https://www.npmjs.com/package/htm) with [Preact](https://www.npmjs.com/package/preact) renderer is available in this package.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/htm-preact'

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
import { renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/create-element'

createComponent('test-comp', {
  renderer,
  render () {
    return `
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```
