/* eslint-disable */
import { html as litHTML, render as litRenderer } from 'lit-html'
import { html as uhtmlHTML, render as uhtmlRenderer } from 'uhtml'
import { html as htmHTML, render as htmRenderer } from 'htm/preact'

declare module '@ficusjs/renderers' {
  export { uhtmlHTML as html, uhtmlRenderer as renderer }
}

declare module '@ficusjs/renderers/dist/uhtml' {
  export { uhtmlHTML as html, uhtmlRenderer as renderer }
}

declare module '@ficusjs/renderers/dist/lit-html' {
  export { litHTML as html, litRenderer as renderer }
}

declare module '@ficusjs/renderers/dist/htm' {
  export { htmHTML as html, htmRenderer as renderer }
}
