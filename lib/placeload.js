import { IO, Either, Maybe } from 'ramda-fantasy'
import { merge, is, last } from 'ramda'
import defaultOptions from './config.js'
import styl from './styl'
const Right = Either.Right
const Left = Either.Left

//configIO :: IO -> IO
const configIO = (_IO, config) => {
  return _IO.map(element => {
    element.map(elem => {
      const stylWithDefault = merge(defaultOptions, config)
      const placeloadHeight = elem.placeload.style.height
      const newHeightToPlaceload = parseInt(placeloadHeight) + parseInt(stylWithDefault.spaceBetween)
      const newElement = styl(document.createElement('div'))
            .width('100%')
            .height(stylWithDefault.spaceBetween)
            .marginTop(placeloadHeight)
            .addClass('placeload-masker').toDOM()

      if(stylWithDefault.right){
        const lastChild = elem.elems[elem.elems.length - 2]
        const itemToRight = last(elem.elems)
        styl(lastChild).hide()
        styl(itemToRight)
          .width('20px')
          .height(`${parseInt(itemToRight.style.marginTop)}px`)
          .marginLeft(lastChild.style.marginLeft)
          .marginTop(lastChild.style.marginTop)
        styl(elem.placeload).height(`${parseInt(lastChild.style.marginTop) + parseInt(lastChild.style.height)}px`)
      }else{
        styl(elem.placeload).height(`${newHeightToPlaceload}px`)
      }
      elem.placeload.style.animationDuration = stylWithDefault.speed
      elem.placeload.appendChild(newElement)
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

Placeload
  .$('.user-placeload')
  .config({speed: '2s'})
  .line((element) => element.width(20).height(100))
  .config({spaceBetween: '20px'})
  .line((element) => element.width(40).height(30))
  .config({spaceBetween: '20px', right: true})
  .fold((err) => console.log('error: ', err),
        (right) => console.log('sucess: ', right))
