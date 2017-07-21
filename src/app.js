const { IO, Either } = require('ramda-fantasy')

const configIO = (_IO) => {
  return _IO.map(element => {
    return element
  })
}

// createElemFolk :: Either -> Node(DOM) -> prop -> value -> Object(DOM Elements)
const createElemFolk = (elements, newElement, prop, value) => {
  return elements.map(elem => {
    newElement.style[prop] = value
    elem.placeload.appendChild(newElement)
    return elem
  })
}

const elementStyle = (elements, newElement) => ({
  width:  (size) => elementStyle(createElemFolk(elements, newElement, 'width', size + 'px'), newElement ),
  height: (size) => elementStyle(createElemFolk(elements, newElement, 'height', size + 'px'), newElement )
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

const place = (_IO) => {
  return ({
    config: () => place(configIO(_IO)),
    line: f => {
      return place(drawIO(f, _IO))
    },
    fold: (err, succ) => _IO.runIO().either(err, succ),
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
  .line((element) => element.width(100).height(100))
  .fold( (err)=> console.log('error: ', err),
         (right) => console.log('sucess: ', right) )
