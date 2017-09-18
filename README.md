# placeload.js
The best way to create a placeholder layout effect.

What is it?
-------------

Placeload.js is a library to customize your interface previews/skeleton screen that yield a fantastic user experience.

![](https://github.com/victorvoid/placeload.js/blob/master/placeload-desc.jpg)

Getting started
------------

Compiled and production-ready code can be found in the dist directory. The lib directory contains development code.

Install placeload.js with npm:

```sh
$ npm install placeload.js
```

Install placeload.js with bower:

```sh
$ bower install https://github.com/victorvoid/placeload.js.git
```

### 1. Include placeload on your site.

```html
<link href="dist/placeload.min.css">

<script src="dist/placeload.min.js"></script>
```

### 2. Paint your placeholder

```js

import Placeload from 'placeload.js'

Placeload
  .$('.user-placeload')
  .config({speed: '2s'})
  .line((element) => element.width(300).height(200))
  .fold(
    (err) => console.log('error: ', err),
    (allElements) => console.log('allElements: ', allElements)
  )
```

### 3. Placeload uses lazy evaluation, in that nothing is evaluated until necessary. 

```js

import Placeload from 'placeload.js'

const userLoader = Placeload
    .$('.user-placeload')
    .config({speed: '2s'})
    .line((element) => element.width(300).height(200))
    .config({spaceBetween: '30px'})
    .line((element) => element.width(400).height(20))
    .config({spaceBetween: '30px'})
    .line((element) => element.width(400).height(20))
    .config({spaceBetween: '30px'})
    .line((element) => element.width(250).height(20))


userLoader.fold(
  (err) => console.log('error: ', err),
  (allElements) => console.log('allElements: ', allElements)
)

API.getUsers()
  .then(users => {
      userLoader.remove()
    }
  )
```

![](https://github.com/victorvoid/placeload.js/blob/master/docs/imgs/placeload_example.gif)

Authors
--------
The repo is written and maintained by [Victor Igor](https://github.com/victorvoid). Other contributors that have submitted  something, in alphabetical order:

- [Raniel Oliveira](https://github.com/raniel182) - UX

License
-------

The code is available under the [MIT License](LICENSE.md).
