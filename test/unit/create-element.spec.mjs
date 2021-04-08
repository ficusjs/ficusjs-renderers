import test from 'ava'
import { JSDOM } from 'jsdom'
import { createComponent } from '../helpers/component.mjs'
import { renderer } from '../../src/create-element.mjs'

let document

test.before(t => {
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
  document = dom.window.document
  globalThis.customElements = dom.window.customElements
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.document = document
})

test('render component with createElement renderer', t => {
  const body = document.body
  createComponent('basic-comp', {
    renderer,
    render () {
      return '<p>Basic component</p>'
    }
  })
  const basicComp = document.createElement('basic-comp')
  body.appendChild(basicComp)
  t.is(document.querySelector('basic-comp p').textContent, 'Basic component')
})
