import './style.css';
import { IO, Either } from 'ramda-fantasy'
import defaultOptions from './config.js'
import styl from './styl'
const Right = Either.Right
const Left = Either.Left

const Placeload = {
  $: (x) => utils(boxElements(x), selector(x))
}

// selector :: String -> Either
const selector = (x) => {
  const element = document.querySelector(x)
  return element ? Right(element) : Left(`Don\'t found ${x} element`)
}

// boxElements :: String -> IO
const boxElements = (x) => {
  return IO(() => {
    return selector(x).chain(container => {
      const elementPlaceload = styl(document.createElement('div')).addClass('placeload-background').toDOM()
      container.appendChild(elementPlaceload)
      return Right({
        container: container,
        placeload: elementPlaceload,
        elems: []
      })
    })
  })
}

// place  :: IO -> IO(Node(DOM)) -> Object
const utils = (_IO, container) => {
  return ({
    config: (configs) => utils(configIO(_IO, configs), container),
    line: f => utils(drawIO(f, _IO), container),
    fold: (err, succ) => {
      _IO.runIO().either(err, succ)
      return {
        remove: () => {
          container.map(element => {
            element.parentNode.removeChild(element);
          })
        }
      }
    },
    inspect: () => console.log('IO: ', _IO.toString())
  })
}

// drawIO :: Function -> IO -> Function(IO)
const drawIO = (f, _IO) => {
  return _IO.map((elements) => {
    return elements.map(el => {
      const newElement = document.createElement('div')
      styl(newElement).addClass('placeload-masker')
      f(elementStyle(elements, newElement))
      return {...elements.value, elems: [...elements.value.elems, newElement]}
    })
  })
}

// elementStyle :: Object(DOM Elements) -> Node(DOM) -> Object (fn, fn, ...)
const elementStyle = (elements, newElement) => ({
  width: (size) => elementStyle(newBoxStyled(elements, newElement, 'width', size), newElement),
  height: (size) => elementStyle(newBoxStyled(elements, newElement, 'height', size), newElement)
})

// configIO :: IO -> Object -> IO
const configIO = (_IO, config) => {
  return _IO.map(element => {
    return element.chain(elem => {
      const stylWithDefault = { defaultOptions, ...config }
      const placeloadHeight = elem.placeload.style.height || 0
      const newHeightToPlaceload = parseInt(placeloadHeight) + parseInt(stylWithDefault.spaceBetween)
      const newElement = styl(document.createElement('div'))
        .width('100%')
        .height(stylWithDefault.spaceBetween)
        .marginTop(placeloadHeight)
        .addClass('placeload-masker').toDOM()

      styl(elem.placeload).height(`${newHeightToPlaceload}px`)
      elem.placeload.style.animationDuration = stylWithDefault.speed
      elem.placeload.appendChild(newElement)
      return element
    })
  })
}

// newBoxStyled :: Either -> Node(DOM) -> String -> String -> Object(DOM Elements)
const newBoxStyled = (elements, newElement, prop, value) => {
  return elements.map(elem => {
    const height = elem.placeload.style.height || 0
    switch (prop) {
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

// Export
if (typeof window !== 'undefined' && window) {
	if (typeof module === 'object' && module.exports) {
	  module.exports = Placeload;
	} else {
	  // Browser
	  window.Placeload = Placeload;
	}
}
