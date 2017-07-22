const styling = (element, prop, value) => {
  element.style[prop] = value
  return element
}

const styl = (element) => ({
  width: (value) => styl(styling(element, 'width', value)),
  height: (value) => styl(styling(element, 'height', value)),
  marginTop: (value) => styl(styling(element, 'margin-top', value)),
  marginLeft: (value) => styl(styling(element, 'margin-left', value))
})

export default styl
