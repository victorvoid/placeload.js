const { IO, Either } = require('ramda-fantasy')

const configIO = (_IO) => {
  return _IO.map(element => {
    return element
  })
}

const createElemFolk = (IO, element, prop, value) => {
  return IO.map(elements => {
    return elements.map(elem => {
      element.style[prop] = value
      elem.placeload.appendChild(element)
      return elem
    })
  })
}

const elementStyle = (_IO, element) => ({
  width:  (size) => elementStyle(createElemFolk(_IO, element, 'width', size + 'px'), element),
  height: (size) => elementStyle(createElemFolk(_IO, element, 'height', size + 'px'), element),
  _IO
})

// drawIO :: a -> IO -> a(IO)
const drawIO = (f, _IO, element) => {
  const newElement = document.createElement('div')
  newElement.className += ' placeload-masker'
  return f(elementStyle(_IO, newElement))
}

const place = (_IO) => {
  return ({
    config: () => place(configIO(_IO)),
    draw: f => place(drawIO(f, _IO)),
    fold: (err, succ) => _IO._IO.runIO().either(err, succ),
    inspect: () => console.log('IO: ', _IO)
  })
}

const Placeload = {
  $ : (x) => place(IO(() => {
    const container = document.querySelector(x)
    if(container){
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
  .draw((element) => element.width(100).height(100))
  .fold( (err)=> console.log('error: ', err),
         (right) => console.log('sucess: ', right) )
