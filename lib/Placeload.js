import { IO, Either } from 'ramda-fantasy'
import { merge, is } from 'ramda'
import { containerDefaultOptions, lineDefaultOptions } from './config.js'
import styl from './styl'

//configIO :: IO -> IO
const configIO = (_IO, config) => {
  return _IO.map(element => {
    element.map(domElement => {
      const stylWithDefault = merge(containerDefaultOptions, config)
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

const tool = (tools, elements, newElement) => {
  return elements.map(elem => {
    const placeloadHeight = elem.placeload.style.height
    const stylWithDefault = merge(lineDefaultOptions, tools)
    const newHeightToPlaceload = parseInt(placeloadHeight) + parseInt(stylWithDefault.spaceBetween)

    styl(newElement).width('100%').height(stylWithDefault.spaceBetween).marginTop(placeloadHeight)
    styl(elem.placeload).height(`${newHeightToPlaceload}px`)
    elem.placeload.appendChild(newElement)
  })
}

// drawIO :: F -> IO -> F(IO)
const drawIO = (f, _IO) => {
  return _IO.map((elements) => {
    const newElement = document.createElement('div')
    newElement.className += ' placeload-masker'

    if(is(Function, f)){
      f(elementStyle(elements, newElement))
    }else{
      tool(f, elements, newElement)
    }
    return elements
  })
}

//place  :: IO -> Object
const place = (_IO) => {
  return ({
    config: (configs) => place(configIO(_IO, configs)),
    line: f => place(drawIO(f, _IO)),
    spaceBetween: size => place(drawIO({spaceBetween: size}, _IO)),
    fold: (err, succ) => _IO.runIO().either(err, succ),
    inspect: () => console.log('IO: ', _IO.toString())
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
  .spaceBetween('20px')
  .line((element) => element.width(40).height(30))
  .spaceBetween('20px')
  .line((element) => element.width(100).height(30))
  .fold((err) => console.log('error: ', err),
        (right) => console.log('sucess: ', right))
