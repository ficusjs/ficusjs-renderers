import htm from 'htm/mini'
import { h } from './jsx-dom.mjs'

const html = htm.bind(h)

function renderer (what, where) {
  // remove any existing elements
  while (where.firstChild) where.removeChild(where.firstChild)

  // add the element to the DOM
  Array.isArray(what) ? what.forEach(w => where.appendChild(w)) : where.appendChild(what)
}

export { html, renderer }
