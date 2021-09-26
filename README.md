# FicusJS renderers

Minified ES module renderers for [FicusJS](https://docs.ficusjs.org).

This package provides a tested set of renderers as ES modules to make working with them much easier.

## Summary

A `renderer` function can be provided when creating a new [FicusJS](https://docs.ficusjs.org) component.
This allows any renderer to be plugged into a component.

The following renderers have been tested with [FicusJS](https://docs.ficusjs.org) and are available as minified bundles in this package to make working with them much easier.

- [htm](https://www.npmjs.com/package/htm) (JSX-like syntax - no transpiler necessary) - 923 B gzipped
- [htm](https://www.npmjs.com/package/htm) with [Preact](https://www.npmjs.com/package/preact) (JSX-like syntax - no transpiler necessary) - 4.3 KB gzipped
- [lit-html](https://www.npmjs.com/package/lit-html) - 3.61 KB gzipped
- [uhtml](https://www.npmjs.com/package/uhtml) - 3.02 KB gzipped

## htm

The [htm](https://www.npmjs.com/package/htm) renderer is a JSX-like renderer available in this package.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@4/htm'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## htm with Preact

The [htm](https://www.npmjs.com/package/htm) with [Preact](https://www.npmjs.com/package/preact) renderer is available in this package.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@4/htm-preact'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## lit-html

The [lit-html](https://www.npmjs.com/package/lit-html) renderer is available in this package.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@4/lit-html'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## uhtml

The [uhtml](https://www.npmjs.com/package/uhtml) renderer is available in this package.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@4/uhtml'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```
