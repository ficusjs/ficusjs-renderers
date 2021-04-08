import test from 'ava'
import { JSDOM } from 'jsdom'
import { createComponent } from '../helpers/component.mjs'

let document

test.before(t => {
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
  document = dom.window.document
  globalThis.window = dom.window
  globalThis.customElements = dom.window.customElements
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.document = document
})

test('render component with lit-html renderer', t => {
  return import('../../src/lit-html.mjs')
    .then(({ html, renderer }) => {
      const body = document.body
      createComponent('lit-html-comp', {
        renderer,
        render () {
          return html`<p>lit-html component</p>`
        }
      })
      const htmComp = document.createElement('lit-html-comp')
      body.appendChild(htmComp)
      t.is(document.querySelector('lit-html-comp p').textContent, 'lit-html component')
    })
})
