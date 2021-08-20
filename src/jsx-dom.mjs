/* global Node */
const flatten = arr => arr.flat(1)

const h = (tag, attrs, ...children) => {
  let elm = null
  let isSvg = false
  if (['svg', 'use', 'symbol', 'path', 'g', 'defs', 'title'].indexOf(tag) > -1) {
    elm = document.createElementNS('http://www.w3.org/2000/svg', tag)
    isSvg = true
  } else {
    elm = document.createElement(tag)
  }
  for (const key in attrs) {
    if (key.slice(0, 2) === 'on') {
      const evtName = key.slice(2)
      const cb = attrs[key]
      if (cb == null) continue // we can use null or undefined to suppress
      elm.addEventListener(evtName, cb)
    } else if (['disabled', 'selected', 'checked'].indexOf(key) > -1) {
      if (attrs[key]) {
        elm.setAttribute(key, key)
      }
    } else if (key === 'xlinkHref' && isSvg) {
      if (attrs[key]) {
        elm.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', attrs[key])
      }
    } else if (key === 'href' && isSvg) {
      if (attrs[key]) {
        elm.setAttributeNS('http://www.w3.org/1999/xlink', 'href', attrs[key])
      }
    } else {
      if (attrs[key] == null) continue // Don't set undefined or null attributes
      elm.setAttribute(key, attrs[key])
    }
  }
  if (children.length === 0) {
    return elm
  }
  const fc = flatten(children)
  fc.forEach(child => {
    if (child instanceof Node) {
      elm.appendChild(child)
    } else {
      elm.appendChild(document.createTextNode(child))
    }
  })
  if (tag == null) {
    return elm.children
  }
  return elm
}

const fragment = null

export { h, fragment }
