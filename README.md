# FicusJS renderers

Minified ES module renderers for [FicusJS](https://docs.ficusjs.org).

This package provides a tested set of renderers as ES modules to make working with them much easier.

## Getting started

A `renderer` function can be provided when creating a new [FicusJS](https://docs.ficusjs.org) component.
This allows any renderer to be plugged into a component.

The following renderers have been tested with [FicusJS](https://docs.ficusjs.org) and are available as minified bundles in this package to make working with them much easier.

- [htm](https://www.npmjs.com/package/htm) (JSX-like syntax - no transpiler necessary) - 910 B gzipped
- [htm](https://www.npmjs.com/package/htm) with [Preact](https://www.npmjs.com/package/preact) (JSX-like syntax - no transpiler necessary) - 4.46 KB gzipped
- [lit-html](https://www.npmjs.com/package/lit-html) - 3.02 KB gzipped
- [uhtml](https://www.npmjs.com/package/uhtml) - 2.76 KB gzipped
- css - 198 B gzipped

## htm

The [htm](https://www.npmjs.com/package/htm) renderer is a JSX-like renderer available in this package.

```js
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/htm'

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
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/htm-preact'

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
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/lit-html'

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
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/uhtml'

createComponent('test-comp', {
  renderer,
  render () {
    return html`
      <div>Some HTML content with ${someVariable}</div>
    `
  }
})
```

## css

The css renderer is available in this package and is intended for rendering CSS styles within a component.

This renderer is used in conjunction with the [withStyles](https://docs.ficusjs.org/extending-components/with-styles/) component extension.

```js
// import the css tagged template literal
import { css } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/css'

createCustomElement(
  'test-comp',
  withStyles({
    renderer,
    styles () {
      return css`
        test-comp div {
          background-color: purple;
          color: pink
        }
      `
    },
    render () {
      return html`
        <div>Some HTML content with ${someVariable}</div>
      `
    }
  })
)
```

## Installation

FicusJS renderers can be installed in a number of ways.

### CDN

We recommend using native ES modules in the browser.

```html
<script type="module">
  import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/uhtml'
</script>
```

FicusJS renderers is available on [Skypack](https://www.skypack.dev/view/@ficusjs/renderers).

### NPM

FicusJS renderers work nicely with build tools such as Snowpack, Webpack or Rollup. If you are using a NodeJS tool, you can install the NPM package.

```bash
npm install @ficusjs/renderers
```

### Available builds

FicusJS renderers only provides ES module builds. For legacy browsers or alternative modules such as CommonJS, it is recommended to use a build tool to transpile the code.

## Development

How to set-up FicusJS renderers for local development.

1. Clone the repository:

```bash
git clone https://github.com/ficusjs/ficusjs-renderers.git
```

2. Change the working directory

```bash
cd ficusjs-renderers
```

3. Install dependencies

```bash
npm install
```

4. Run the local development server

```bash
npm run dev
```

That's it! Now open http://localhost:8080 to see a local app.

## License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## Contributing to FicusJS renderers

Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can work on any features you think would enhance the library. After adding your code, please send us a Pull Request.

> Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our [CODE OF CONDUCT](CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## Support

We all need support and motivation. FicusJS is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

If you found the library helpful, please consider [sponsoring us](https://github.com/sponsors/ficusjs).
