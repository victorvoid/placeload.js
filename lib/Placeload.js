import { IO, Either } from 'ramda-fantasy'
import { merge } from 'ramda'
import defaultOptions from './config.js'
import styl from './styl'

//configIO :: IO -> IO
const configIO = (_IO, config) => {
  return _IO.map(element => {
    element.map(domElement => {
      const stylWithDefault = merge(defaultOptions, config)
      domElement.placeload.style.animationDuration = stylWithDefault.speed
    })
    return element
  })
}

// createElemFolk :: Either -> Node(DOM) -> prop -> value -> Object(DOM Elements)
const createElemFolk = (elements, newElement, prop, value) => {
  return elements.map(elem => {
    const height = elem.placeload.style.height || 0
    switch(prop){
      case 'width':
        styl(newElement).width(`100%`).marginLeft(`${value}%`).marginTop(height)
        break
      case 'height':
        styl(newElement).height(`${value}px`)
        styl(elem.placeload).height(`${parseInt(height) + value}px`)
        break
    }
    elem.placeload.appendChild(newElement)
    return elem
  })
}
// elementStyle :: Object(DOM Elements) -> Node(DOM) -> Object (fn, fn, ...)
const elementStyle = (elements, newElement) => ({
  width: (size) => elementStyle(createElemFolk(elements, newElement, 'width', size), newElement),
  height: (size) => elementStyle(createElemFolk(elements, newElement, 'height', size), newElement)
})

// drawIO :: F -> IO -> F(IO)
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
    config: (configs) => place(configIO(_IO, configs)),
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
  .config({speed: '2s'})
  .line((element) => element.width(20).height(100))
  .line((element) => element.width(10).height(50))
  .line((element) => element.width(100).height(50))
  .fold((err) => console.log('error: ', err),
        (right) => console.log('sucess: ', right))
