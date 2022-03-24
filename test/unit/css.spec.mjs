import test from 'ava'
import { JSDOM } from 'jsdom'
import { createComponent } from '../helpers/component.mjs'
import { withStyles } from '../helpers/with-styles.mjs'

let document

test.before(t => {
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
  document = dom.window.document
  globalThis.window = dom.window
  globalThis.customElements = dom.window.customElements
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.document = document
})

test('render component with css renderer', t => {
  return Promise.all([
    import('../../src/uhtml.mjs'),
    import('../../src/css.mjs')
  ])
    .then(([{ html, renderer }, { css }]) => {
      const body = document.body
      createComponent(
        'css-comp',
        withStyles({
          renderer,
          styles () {
            return css`
              css-comp p {
                background-color: purple;
                color: pink;
              }
            `
          },
          render () {
            return html`<p>css component</p>`
          }
        })
      )
      const comp = document.createElement('css-comp')
      body.appendChild(comp)
      t.is(document.querySelector('css-comp p').textContent, 'css component')
    })
})
