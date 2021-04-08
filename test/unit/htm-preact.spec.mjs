import test from 'ava'
import { JSDOM } from 'jsdom'
import { createComponent } from '../helpers/component.mjs'
import { html, renderer } from '../../src/htm-preact.mjs'

let document

test.before(t => {
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
  document = dom.window.document
  globalThis.customElements = dom.window.customElements
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.document = document
})

test('render component with htm and preact renderer', t => {
  const body = document.body
  createComponent('htm-preact-comp', {
    renderer,
    render () {
      return html`<p>htm with preact component</p>`
    }
  })
  const htmComp = document.createElement('htm-preact-comp')
  body.appendChild(htmComp)
  t.is(document.querySelector('htm-preact-comp p').textContent, 'htm with preact component')
})
