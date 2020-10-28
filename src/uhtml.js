import { html, render as uhtmlRenderer } from 'uhtml'

function renderer (what, where) {
  uhtmlRenderer(where, what)
}

export { html, renderer }
