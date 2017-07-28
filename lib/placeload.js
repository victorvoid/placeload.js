import { IO, Either } from 'ramda-fantasy'
import defaultOptions from './config.js'
import styl from './styl'
const Right = Either.Right
const Left = Either.Left

const Placeload = {
  $: (x) => place(IO(() => {
    const container = document.querySelector(x)
    if (container) {
      const elementPlaceload = styl(document.createElement('div')).addClass('placeload-background').toDOM()
      container.appendChild(elementPlaceload)
      return Right({
        container: container,
        placeload: elementPlaceload,
        elems: []
      })
    }
    return Left(`Don\' found ${x} element`)
  }))
}

// place  :: IO -> Object
const place = (_IO) => {
  return ({
    config: (configs) => place(configIO(_IO, configs)),
    line: f => place(drawIO(f, _IO)),
    spaceBetween: size => place(drawIO({spaceBetween: size}, _IO)),
    fold: (err, succ) => _IO.runIO().either(err, succ),
    inspect: () => console.log('IO: ', _IO.toString())
  })
}

// drawIO :: F -> IO -> F(IO)
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
  width: (size) => elementStyle(createElemFolk(elements, newElement, 'width', size), newElement),
  height: (size) => elementStyle(createElemFolk(elements, newElement, 'height', size), newElement)
})

// configIO :: IO -> IO
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

      if (stylWithDefault.right) {
        runDrawRightLine(elem, stylWithDefault).runIO()
      } else {
        styl(elem.placeload).height(`${newHeightToPlaceload}px`)
      }
      elem.placeload.style.animationDuration = stylWithDefault.speed
      elem.placeload.appendChild(newElement)
      return element
    })
  })
}

const runDrawRightLine = (elem, stylWithDefault) => {
  return IO(() => {
    const lastChild = elem.elems[elem.elems.length - 2]
    const itemToRight = elem.elems[elem.elems.length - 1]
    const elementRow = styl(document.createElement('div'))
          .addClass('placeload-masker')
          .width('100%')
          .height('10px')
          .marginTop('20px')
          .marginLeft(lastChild.style.marginLeft).toDOM()

    styl(lastChild).hide()
    styl(itemToRight)
      .width(stylWithDefault.marginLeft)
      .height(itemToRight.style.marginTop)
      .marginLeft(lastChild.style.marginLeft)
      .marginTop(lastChild.style.marginTop)

    styl(elem.placeload).height(`${parseInt(lastChild.style.marginTop) + parseInt(lastChild.style.height)}px`)
    elem.placeload.appendChild(elementRow)
  })
}

// createElemFolk :: Either -> Node(DOM) -> prop -> value -> Object(DOM Elements)
const createElemFolk = (elements, newElement, prop, value) => {
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

Placeload
  .$('.user-placeload')
  .config({speed: '2s'})
  .line((element) => element.width(20).height(100))
  .config({spaceBetween: '30px'})
  .line((element) => element.width(40).height(30))
  .config({right: true, marginLeft: '30px'})
  .line((element) => element.width(100).height(30))
  .line((element) => element.width(30).height(100))
  .fold((err) => console.log('error: ', err),
        (right) => console.log('sucess: ', right))
