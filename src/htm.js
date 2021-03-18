import htm from 'htm/src/index.mjs'
import { h } from './util/jsx-dom.js'

const html = htm.bind(h)

function renderer (what, where) {
  // remove any existing elements
  while (where.firstChild) where.removeChild(where.firstChild)

  // add the element to the DOM
  where.appendChild(what)
}

export { html, renderer }
