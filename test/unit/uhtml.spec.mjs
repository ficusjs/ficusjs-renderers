import test from 'ava'
import { JSDOM } from 'jsdom'
import { createComponent } from '../helpers/component.mjs'

let document

test.before(t => {
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
  document = dom.window.document
  globalThis.customElements = dom.window.customElements
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.document = document
})

test('render component with uhtml renderer', t => {
  return import('../../src/uhtml.mjs')
    .then(({ html, renderer }) => {
      const body = document.body
      createComponent('uhtml-comp', {
        renderer,
        render () {
          return html`<p>uhtml component</p>`
        }
      })
      const htmComp = document.createElement('uhtml-comp')
      body.appendChild(htmComp)
      t.is(document.querySelector('uhtml-comp p').textContent, 'uhtml component')
    })
})
