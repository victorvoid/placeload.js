const { IO, Either } = require('ramda-fantasy')

const configIO = (_IO) => {
  return _IO.map(element => {
    return element
  })
}

const styling = (element, prop, value) => {
  element.style[prop] = `${value}%`
  return element
}

const styl = (element) => ({
  width: (value) => styl(styling(element, 'width', value)),
  height: (value) => styl(styling(element, 'height', value)),
  marginTop: (value) => styl(styling(element, 'margin-top', value))
})

// createElemFolk :: Either -> Node(DOM) -> prop -> value -> Object(DOM Elements)
const createElemFolk = (elements, newElement, prop, value) => {
  return elements.map(elem => {
    const height = elem.placeload.style.height || 0
    if(prop === 'width'){
      newElement.style.width = `100%`
      newElement.style.marginLeft = `${value}%`
      newElement.style.marginTop = `${parseInt(height)}px`
    }else{
      newElement.style[prop] = `${value}px`
      elem.placeload.style.height = `${parseInt(height) + value}px`
    }
    console.log(elem.placeload.style.height)
    elem.placeload.appendChild(newElement)
    return elem
  })
}

const elementStyle = (elements, newElement) => ({
  width: (size) => elementStyle(createElemFolk(elements, newElement, 'width', size), newElement),
  height: (size) => elementStyle(createElemFolk(elements, newElement, 'height', size), newElement)
})

// drawIO :: a -> IO -> a(IO)
const drawIO = (f, _IO, element) => {
  return _IO.map((elements) => {
    const newElement = document.createElement('div')
    newElement.className += ' placeload-masker'
    f(elementStyle(elements, newElement))
    return elements
  })
}
//place  :: IO -> Object
const place = (_IO) => {
  return ({
    config: () => place(configIO(_IO)),
    line: f => place(drawIO(f, _IO)),
    fold: (err, succ) => _IO.runIO().either(err, succ),
    inspect: () => console.log('IO: ', _IO)
  })
}

const Placeload = {
  $: (x) => place(IO(() => {
    const container = document.querySelector(x)
    if (container) {
      const elementPlaceload = document.createElement('div')
      elementPlaceload.className += ' placeload-background'
      container.appendChild(elementPlaceload)
      return Either.Right({
        container: container,
        placeload: elementPlaceload
      })
    }
    return Either.Left(`Don\' found ${x} element`)
  }))
}

Placeload
  .$('.user-placeload')
  .config({color: 'red'})
  .line((element) => element.width(20).height(100))
  .line((element) => element.width(10).height(50))
  .fold((err) => console.log('error: ', err),
        (right) => console.log('sucess: ', right))
