function createStyle (css) {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  return style
}

export function css (literals, ...vars) {
  const raw = literals.raw
  let result = ''
  let i = 1
  const len = arguments.length
  let str
  let variable

  while (i < len) {
    str = raw[i - 1]
    variable = vars[i - 1]
    result += str + variable
    i++
  }
  result += raw[raw.length - 1]

  return createStyle(result)
}
