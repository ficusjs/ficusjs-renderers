import test from 'ava'
import { JSDOM } from 'jsdom'
import { createComponent } from '../helpers/component.mjs'
import { html, renderer } from '../../src/htm.mjs'

let document

test.before(t => {
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
  document = dom.window.document
  globalThis.customElements = dom.window.customElements
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.document = document
  globalThis.Node = dom.window.Node
})

test('render component with htm renderer', t => {
  const body = document.body
  createComponent('htm-comp', {
    renderer,
    render () {
      return html`<p>htm component</p>`
    }
  })
  const htmComp = document.createElement('htm-comp')
  body.appendChild(htmComp)
  t.is(document.querySelector('htm-comp p').textContent, 'htm component')
})

test('render svg with htm renderer', t => {
  const body = document.body
  createComponent('htm-svg-comp', {
    renderer,
    render () {
      return html`<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        Sorry, your browser does not support inline SVG.
      </svg>`
    }
  })
  const htmComp = document.createElement('htm-svg-comp')
  body.appendChild(htmComp)
  t.is(document.querySelector('htm-svg-comp svg circle').getAttribute('fill'), 'red')
  t.is(document.querySelector('htm-svg-comp svg circle').getAttribute('stroke'), 'black')
})
